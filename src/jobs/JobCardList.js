import JoblyApi from "../api";
import { useContext } from 'react';
import TokenContext from "../context/TokenContext";
import './JobCardList.css'
import { Card, CardTitle } from 'reactstrap'

const JobCardList = ({ jobs }) => {
    const { currUser, appliedJobs, setAppliedJobs } = useContext(TokenContext)
    const apply = async (jobId) => {
        await JoblyApi.apply(currUser.username, jobId)
        setAppliedJobs(new Set([...appliedJobs, jobId]))
    }

    let jobList = jobs.map(job => {
        return (
            
                <Card className='my-3 text-start bg-light' key={job.id}>
                    <div className='m-2 mx-4' >
                        <CardTitle><h4>{job.title}</h4></CardTitle>
                        <div className='d-flex justify-content-between align-items-end'>
                            <p>{job.salary && <span>Salary: ${job.salary} </span>}
                                {job.equity && <span>Equity: {job.equity}</span>}</p>
                            <button
                                className='btn btn-sm  btn-primary'
                                onClick={() => apply(job.id)}
                                disabled={appliedJobs.has(job.id)}>
                                {appliedJobs.has(job.id) ? "Applied" : "Apply"}
                            </button>
                        </div>
                    </div>
                </Card>
    )})
    return (
        <div className='JobCardList'>
            {jobList}
        </div>
    )
}

export default JobCardList;
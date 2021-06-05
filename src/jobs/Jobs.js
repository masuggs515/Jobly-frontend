import { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import JoblyApi from '../api'
import SearchForm from '../companies/SearchForm';
import TokenContext from '../context/TokenContext';
import JobCardList from './JobCardList';
import {Container} from 'reactstrap'

const Jobs = () =>{
    const {token} = useContext(TokenContext)
    const [jobs, setJobs] = useState(null);

    useEffect(function getJobsList() {
        async function getAllJobs() {
            setJobs(await JoblyApi.getJobs());
        }

        getAllJobs();
    }, []);

    const search = async (title) =>{
        let jobs = await JoblyApi.getJobs(title);
        console.log(title, jobs);
        setJobs(jobs);
    }

    if(!jobs) return <h2>Loading...</h2>

    if(!token) return <Redirect to='/login' />

    return(
        <Container>
        <div className='Jobs mt-4'>
            <div className='d-flex justify-content-between'>
            <h1>Jobs</h1>
            <SearchForm search={search}/>
            </div>
            <Container>
                <JobCardList 
                jobs={jobs}
                />
                </Container>
        </div>
        </Container>
    );
};

export default Jobs;
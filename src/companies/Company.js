import { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router";
import JoblyApi from '../api';
import TokenContext from "../context/TokenContext";
import JobCardList from '../jobs/JobCardList';

const Company = () => {
  const { token } = useContext(TokenContext)
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return <h1>Loading...</h1>

  if (!token) return <Redirect to='/login' />

  return (
    <div className='Company'>
      <h1 className='my-3'>Company {company.name}</h1>
      <p className='fw-bold mx-5 text-white'>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  )
}

export default Company;
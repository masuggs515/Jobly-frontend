import { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import JoblyApi from "../api";
import TokenContext from "../context/TokenContext";
import CompanyCardList from "./CompanyCardList";
import SearchForm from './SearchForm'
import { Container } from 'reactstrap';


const Companies = () => {

    const { token } = useContext(TokenContext);

    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesList() {
        async function getAllCompanies() {
            setCompanies(await JoblyApi.getCompanies());
        }

        getAllCompanies();
    }, []);

    const search = async (name) => {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <h1>Loading...</h1>

    if (!token) return <Redirect to='/login' />

    return (

        <div>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1 className='mt-3'>Companies</h1>
                <SearchForm search={search} />
            </div>
            <Container>
                {companies.map(company => {
                    return (

                        <Link className='text-dark text-decoration-none' to={`companies/${company.handle}`} key={company.handle}>
                            <CompanyCardList company={company} />
                        </Link>
                    )
                })}
            </Container>
        </div>
    );
};

export default Companies;
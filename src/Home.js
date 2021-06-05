import { Link } from "react-router-dom"
import { Button } from 'reactstrap';
import './Home.css'

const Home = () => {
    return (
        <div className='Home d-flex justify-content-around align-items-center pb-5'>
            <Link to='/companies'><Button color='warning'>Companies Hiring</Button></Link>{'  '}
            <Link to='/jobs'><Button color='success'>Jobs Available</Button></Link>

        </div>
    )
};

export default Home;
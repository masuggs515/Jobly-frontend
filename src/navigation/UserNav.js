import { useContext } from "react";
import TokenContext from "../context/TokenContext";
import {NavLink, Navbar} from 'reactstrap';

const UserNav = ({ logout }) => {

    const { currUser } = useContext(TokenContext);


    if (currUser) {
        return (
            <Navbar className='UserNav'>
                <NavLink className='text-white' href='/profile'>{currUser.username}</NavLink>
                <NavLink className='text-white' href='/' onClick={logout}>Logout </NavLink>
            </Navbar>
        )
    } else {
        return (
            <Navbar className='UserNav'>
                <NavLink className='text-white' href='/signup'>Signup</NavLink>
                <NavLink className='text-white' href='/login'>Login</NavLink>
            </Navbar>
        )
    }


};

export default UserNav;






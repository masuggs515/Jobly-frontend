import UserNav from './UserNav';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink
} from 'reactstrap';

const NavBar = ({ logout }) => {
    return (
        <div className='NavBar mb-4' color='light'>
            <Navbar color='dark' dark>
                <Container fluid={true}>
                <NavbarBrand href='/'>Jobly</NavbarBrand>
                <Nav className='mr-auto'>
                    <NavItem>
                        <NavLink className='text-white' href="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-white' href="/jobs">Jobs</NavLink>
                    </NavItem>
                </Nav>
                <UserNav logout={logout} />
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
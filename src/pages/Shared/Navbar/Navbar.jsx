import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Navbar.css';
import musicLogo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className=' pb-5'>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <Link as={Link} to="/" className='no-underline'>
                <img src={musicLogo} alt="" className="logo-image w-25" />
                <span className="fw-bold" style={{ color: '#f66600' }}>
                Academy
                </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav"></Navbar.Toggle>
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/">Instructors</Nav.Link>
              <Nav.Link as={Link} to="/">Classes</Nav.Link>
              <Nav.Link as={Link} to="/">Contact</Nav.Link>
            </Nav>
            <Link to="/login">
              <Button className="custom-button btn-warning">Login</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

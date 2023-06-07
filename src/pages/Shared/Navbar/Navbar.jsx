import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Navbar.css';
import musicLogo from '../../../assets/logo.png';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='mb-5 pb-5'>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#showcase">
          <img src={musicLogo} alt="" className="logo-image w-25" />
            <span className="fw-bold" style={{ color: '#f66600' }}>
              Academy
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="#showcase">Home</Nav.Link>
              <Nav.Link href="#about">Instructors</Nav.Link>
              <Nav.Link href="#authors">Classes</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Button className="custom-button btn-warning">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

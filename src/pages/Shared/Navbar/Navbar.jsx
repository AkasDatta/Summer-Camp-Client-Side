import { Navbar, Container, Nav, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Navbar.css';
import musicLogo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [photoLoading, setPhotoLoading] = useState(true);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    if (user && user.photoURL) {
      const image = new Image();
      image.src = user.photoURL;
      image.onload = () => {
        setPhotoLoading(false);
      };
      image.onerror = () => {
        setPhotoLoading(false);
        setPhotoError(true);
      };
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  const renderTooltip = () => {
    return (
      <Tooltip id="username-tooltip">
        {user.displayName}
      </Tooltip>
    );
  };

  return (
    <div className='pb-5'>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className='no-underline'>
            <img src={musicLogo} alt="Logo" className="logo-image w-25" />
            <span className="fw-bold" style={{ color: '#f66600' }}>
              Academy
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto ">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/instructor">Instructors</Nav.Link>
              <Nav.Link as={Link} to="/classes">Classes</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
            {user && (
              <Nav.Item>
                {photoLoading ? (
                  <span>Loading...</span>
                ) : photoError ? (
                  <span>Error loading photo</span>
                ) : (
                  <OverlayTrigger placement="bottom" overlay={renderTooltip()}>
                    <img className="navbar-img m-2" src={user.photoURL} alt="User" />
                  </OverlayTrigger>
                )}
              </Nav.Item>
            )}
            {user ? (
              <>
                <Button onClick={handleLogOut} className="btn-warning">Log Out</Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button className="btn-warning">Login</Button>
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

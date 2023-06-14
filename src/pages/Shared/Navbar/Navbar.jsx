import { Navbar, Container, Nav, Button, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap';
import './Navbar.css';
import musicLogo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { RiShoppingBag2Line } from 'react-icons/ri';
import useCart from '../../../hooks/useCart';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [photoLoading, setPhotoLoading] = useState(true);
  const [photoError, setPhotoError] = useState(false);
  const [cart] = useCart();

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
            {user &&   <Nav.Link as={Link} to="/dashboard/mycart">Dashboard</Nav.Link>}
            </Nav>

            {user && <Nav.Link as={Link} to="/dashboard/mycart">
              <Button className='btn btn-light mx-3' style={{ position: 'relative' }}>
                <RiShoppingBag2Line className='text-muted fs-3'></RiShoppingBag2Line>
                <span
                  className="badge"
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    backgroundColor: '#0C4B65',
                    color: 'white',
                    borderRadius: '50%',
                    paddingLeft: '0px',
                    height: '23px',
                    width: '23px'
                  }}
                >
                  +{cart?.length || 0}
                </span>
              </Button>
            </Nav.Link> }



            {user && (
              <Nav.Item>
                {photoLoading ? (
                  <Spinner animation="border" variant="warning" />
                ) : photoError ? (
                  <span>Error loading photo</span>
                ) : (
                  <OverlayTrigger placement="bottom" overlay={renderTooltip()}>
                    <img className="navbar-img m-2 mx-3" src={user.photoURL} alt="User" />
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

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { FaCalendarAlt, FaHome, FaWallet } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div className='container'>
          <Helmet>
             <title>Harmony Academy | Dashboard</title>
          </Helmet>

         <Button variant="primary" onClick={toggleOffcanvas}>
            h
        </Button>
        <Outlet></Outlet>

        <Offcanvas scroll={true} backdrop={false} show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="start" target="#offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasScrollingLabel">Colored with scrolling</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Link><FaHome></FaHome>User Home</Link>
                <br />
                <Link><FaCalendarAlt></FaCalendarAlt>Reservations</Link>
                <br />
                <Link><FaWallet></FaWallet>Payment History</Link>
                <br />
                <Link><RiShoppingBag2Line></RiShoppingBag2Line>My Cart</Link>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
  );
};

export default Dashboard;


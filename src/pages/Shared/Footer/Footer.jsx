import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap/esm';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'
import musicLogo from '../../../assets/logo.png';
// import useTitle from '../../hooks/useTitle';

const Footer = () => {
    // useTitle('Home');
    return (
        <div className='footer'>
            <footer style={{backgroundColor: '#fff', color:'#000'}}>
                <div className="footer-top pt-5">
                    <Container>
                    <Row>
                        <Col md={4} sm={12} xs={12} className="segment-one md-mb-30 sm-mb-30">
                        <h2 className='fw-bold'>
                        <a className='text-decoration-none ' href="#home">
                        <img src={musicLogo} alt="" className="logo-image-footer w-50" />
                            <span style={{ color: '#f66600' }}>Academy</span>
                        </a>
                        </h2>
                        <p>
                            Immerse yourself in the captivating world of music at <span style={{ color: '#f66600', fontWeight:'bold' }}>Harmony Academy</span>,
                            where imagination meets playtime.
                        </p>    
                        </Col>

                        <Col md={2} sm={12} xs={12} className="segment-two md-mb-30 sm-mb-30">
                        <h5 className='fw-bold mb-3'>Quick Links</h5>
                        <ul>
                            <li>
                            <Nav.Link as={Link} to="/" className='text-decoration-none'>Home</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link as={Link} to="/blogs" className='text-decoration-none'>Blog</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link as={Link} to="#create-main-section" className='text-decoration-none'>Support</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link as={Link} to="#client" className='text-decoration-none'>Client</Nav.Link>
                            </li>
                            <li>
                            <Nav.Link as={Link} to="/register" className='text-decoration-none'>Contact</Nav.Link>
                            </li>
                        </ul>
                        </Col>


                        <Col md={3} sm={12} xs={12} className="segment-three sm-mb-30">
                        <h5 className='fw-bold mb-3'>Contact Us</h5>
                        <p>1209 Bonani, Dhaka, Bangladesh <br />
                        Email: info@haracademy.com <br />Phone: +880 123 456 7890</p>
                        <h5 className='fw-bold mb-3'>Follow Us</h5>
                        <div className='mb-3'>
                            <a href="https://www.facebook.com/" target="_blank"><FaFacebook className='fash' size={20} /></a>
                            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin className='fa fash1' size={20} /></a>
                            <a href="https://twitter.com/" target="_blank"><FaTwitter className='fa fash' size={20} /></a>
                            <a href="https://www.instagram.com/" target="_blank"><FaInstagram className='fa' size={20} /></a>
                        </div>
                        </Col> 

                        <Col md={3} sm={12} xs={12} className="segment-four sm-mb-30">
                            <h5 className='fw-bold mb-3'>Get in Touch</h5>
                            <p>For any inquiries or to get in touch with us, feel free to reach out via email or phone call. We're here to assist you and provide the information you need. Let's connect and discover the wonderful world of music together.</p>
                        <form>
                            <input type="letter" />
                            <input type="submit" className='text-danger mb-4' value="Subscribe" />
                        </form>
                        </Col>
                    </Row>
                    </Container>
                </div>
                <div className='text-center footer-down text-white'>
                    <p className="pt-3">Copyright © 2023 <a className='text-decoration-none text-warning' href="https://medium.com/@akasdatta">Akas Datta</a> </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
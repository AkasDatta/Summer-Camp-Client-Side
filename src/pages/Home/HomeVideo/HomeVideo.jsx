import { Container, Row, Col } from 'react-bootstrap';
import { FaPlayCircle } from 'react-icons/fa';
import './HomeVideo.css';

const HomeVideo = () => {
    return (
      <div>
            <div className='text-center my-5'>
                <h2 style={{ color: '#C25934', fontWeight:"bold" }}>Our Media</h2>
                <h1 style={{ color: '#0C4B65', fontWeight:"bold" }}>See what our students can do</h1>
            </div>
        <section id="home-video" className="text-center text-light">
            <div className="dark-overlay">
                <Container>
                    <Row>
                        <Col className="mt-5 pt-4">
                        <div>
                            <a href="https://www.youtube.com/watch?v=ksBjyegtBKE" className="text-danger">
                            <FaPlayCircle className="play"></FaPlayCircle>
                             </a>
                        </div>
                        <h2 className="text-light mt-4">Masterclass with James Corden at the Music School</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
      </div>
    );
};

export default HomeVideo;
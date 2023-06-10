import { useState, useEffect } from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import './Banner.css';
import backgroundImage1 from '../../../assets/8.jpg';
import backgroundImage2 from '../../../assets/karim-manjra-cW3nDFVpi10-unsplash.jpg';
import backgroundImage3 from '../../../assets/2.jpg';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];
  const texts = [
    {
      heading: 'Bring music to life!',
      description: 'Unleash your musical talents at our prestigious music school. Experience the joy of bringing music to life!',
    },
    {
      heading: 'Music for Everyone',
      description: 'Discover a world of melodies and rhythms at our renowned music academy. Explore new tastes and embrace musical creativity!',
    },
    {
      heading: 'Music is Your world',
      description: 'Indulge in the harmonious journey of music. Join us to explore new tastes, refine your skills, and create unforgettable melodies.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div>
      <section
        id="banner-section"
        style={{
          minHeight: '750px',
          backgroundImage: `url(${backgrounds[previousIndex]}), url(${backgrounds[currentIndex]})`,
          backgroundPosition: 'center top',
          backgroundSize: '100% 100%',
          transition: 'background-image 1s linear',
        }}
      >
        <div className="dark-overlay">
          <div className="banner-inner">
            <Container>
              <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} className="text-center">
                <h1
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="fw-bold display-1"
                  style={{ color: '#fff' }}
                >
                  {texts[currentIndex].heading}
                </h1>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  className="text-light"
                >
                  {texts[currentIndex].description}
                </p>
                <Button
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  variant="btn btn-outline-light btn-warning text-dark border-danger rounded-5 px-5 py-2"
                >
                  Start Learning
                </Button>
              </Col>
            </Container>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

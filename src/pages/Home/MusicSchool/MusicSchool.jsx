import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CountUp } from 'use-count-up';
import './MusicSchool.css';

const MusicSchool = () => {
  const [finalValues, setFinalValues] = useState({
    professional: 27,
    learning: 54,
    happy: 590,
    music: 24
  });

  useEffect(() => {
    setFinalValues({
      professional: 27,
      learning: 54,
      happy: 590,
      music: 24
    });
  }, []);

  return (
    <section id="getStarted" className="py-5 text-center text-light">
      <div className="dark-overlay">
        <Container>
          <Row>
            <Col className="mt-5 pt-4">
              <h2 className="text-light fs-1 mb-4">Harmony Academy Music School</h2>
              <p className="lead">
                We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other instruments.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={4} lg={4} className="g-4">
            <Col>
              <Card className="bg-transparent border-0 text-light">
                <Card.Body>
                  <div className="display-1 mb-2">
                    <CountUp
                      isCounting
                      end={finalValues.professional}
                      formatter={(value) => value.toLocaleString()}
                      duration={5} 
                    />
                  </div>
                  <h5>professional</h5>
                  <Card.Text>teachers</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 text-light">
                <Card.Body>
                  <div className="display-1 mb-2">
                    <CountUp
                      isCounting
                      end={finalValues.learning}
                      formatter={(value) => value.toLocaleString()}
                      duration={5}
                    />
                  </div>
                  <h5>learning</h5>
                  <Card.Text>groups</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 text-light">
                <Card.Body>
                  <div className="display-1 mb-2">
                    <CountUp
                      isCounting
                      end={finalValues.happy}
                      formatter={(value) => value.toLocaleString()}
                      duration={5}
                    />
                  </div>
                  <h5>happy</h5>
                  <Card.Text>students</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-transparent border-0 text-light">
                <Card.Body>
                  <div className="display-1 mb-2">
                    <CountUp
                      isCounting
                      end={finalValues.music}
                      formatter={(value) => value.toLocaleString()}
                      duration={5}
                    />
                  </div>
                  <h5>music</h5>
                  <Card.Text>classes</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MusicSchool;

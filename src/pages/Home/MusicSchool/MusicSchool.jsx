import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './MusicSchool.css';

const MusicSchool = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <section id="getStarted" className="py-5 text-center text-light">
        <div className="dark-overlay">
          <Container>
            <Row>
              <Col className="mt-5 pt-4">
                <h2 className="text-light fs-3 mb-4">Harmony Academy Music School</h2>
                <p className="lead fs-5">
                  We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other instruments.
                </p>
              </Col>
            </Row>
            <Row xs={2} md={4} lg={4} className="g-4">
              <Col>
                <Card className="bg-transparent border-0 text-light">
                  <Card.Body>
                    <div className="display-3 mb-2">
                      {counterOn && <CountUp start={0} end={27} duration={7} delay={0} />}
                      {!counterOn && "0%"}
                    </div>
                    <h5 className="fs-5">professional</h5>
                    <Card.Text className="fs-6">teachers</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="bg-transparent border-0 text-light">
                  <Card.Body>
                    <div className="display-3 mb-2">
                      {counterOn && <CountUp start={0} end={54} duration={9} delay={0} />}
                      {!counterOn && "0%"}
                    </div>
                    <h5 className="fs-5">learning</h5>
                    <Card.Text className="fs-6">groups</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="bg-transparent border-0 text-light">
                  <Card.Body>
                    <div className="display-3 mb-2">
                      {counterOn && <CountUp start={0} end={590} duration={12} delay={0} />}
                      {!counterOn && "0%"}
                    </div>
                    <h5 className="fs-5">happy</h5>
                    <Card.Text className="fs-6">students</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="bg-transparent border-0 text-light">
                  <Card.Body>
                    <div className="display-3 mb-2">
                      {counterOn && <CountUp start={0} end={24} duration={7} delay={0} />}
                      {!counterOn && "0%"}
                    </div>
                    <h5 className="fs-5">music</h5>
                    <Card.Text className="fs-6">classes</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default MusicSchool;

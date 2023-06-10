import { Card, Col, Row } from "react-bootstrap";
import { FaDrumSteelpan, FaFilter, FaGuitar, FaHighlighter, FaMagic, FaMicrophone, FaPaypal } from "react-icons/fa";
import './MusicalInstructor.css';

const MusicalInstrument = () => {
    return (
        <div className='text-center my-5 py-5 container'>
            <h2 style={{ color: '#0C4B65', fontWeight:"bold" }}>Musical Instruments</h2>
            <h5 style={{ color: '#C25934' }}>classes</h5>
            <Row xs={1} md={4} lg={4} className="g-4">
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="display-1 mb-4 fafa">
                    <FaPaypal></FaPaypal>
                  </div>
                  <h5>Piano</h5>
                  <Card.Text>
                  It is a musical instrument played using a keyboard.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="display-1 mb-4 fafa">
                    <FaMicrophone></FaMicrophone>
                  </div>
                  <h5>Violin</h5>
                  <Card.Text>
                  The violin has four strings tuned in perfect fifths.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="display-1 mb-4 fafa">
                    <FaGuitar></FaGuitar>
                  </div>
                  <h5>Guitar</h5>
                  <Card.Text>
                  The guitar is classified as a string instrument.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="display-1 mb-4 fafa">
                  <FaGuitar></FaGuitar>
                  </div>
                  <h5>Cello</h5>
                  <Card.Text>
                  The cello is used as a solo musical instrument.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="display-1 mb-4 fafa">
                    <FaHighlighter></FaHighlighter>
                  </div>
                  <h5>Flute</h5>
                  <Card.Text>
                  The lowest-pitched bowed string instrument.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="display-1 mb-4 fafa">
                    <FaMagic></FaMagic>
                  </div>
                  <h5>Trumpet</h5>
                  <Card.Text>
                  It is a type of music performed by one or more singers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="display-1 mb-4 fafa">
                    <FaDrumSteelpan></FaDrumSteelpan>
                  </div>
                  <h5>Drums</h5>
                  <Card.Text>
                  The lowest-pitched bowed string instrument.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <div className="display-1 mb-4 fafa">
                        <FaFilter></FaFilter>
                  </div>
                  <h5>Saxophone</h5>
                  <Card.Text>
                  The saxophone is a woodwind instrument.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
    );
};

export default MusicalInstrument;
import { Container, Col, Form, Button } from 'react-bootstrap';
import './BannerCard.css';

const BannerCard = () => {
    return (
        <div className="py-5" style={{backgroundColor: '#CEEDC7'}}>
            <Container>     
                <Form className="row">
                    <Col lg={4}>
                        <h1>Private Lessons</h1>
                    </Col>
                    <Col lg={6}>
                        <h4>We offer music education for individuals of just about every age and skill level.</h4>
                    </Col>
                    <Col lg={2}>
                        <Button className="custom-button rounded-5 px-5 py-2 mt-3"
                            >
                            Start Learning
                        </Button>
                    </Col>
                </Form>
            </Container>
      </div>
    );
};

export default BannerCard;
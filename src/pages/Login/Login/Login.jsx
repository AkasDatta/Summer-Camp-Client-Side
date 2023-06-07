import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import loginImage1 from '../../../assets/loginImage/3.png'
import loginImage from '../../../assets/loginImage/violin-1617972_1920.jpg'
import googleImage from '../../../assets/loginImage/google.png'
import './Login.css';

const Login = () => {
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }
  
  return (
    <section className='loginSection' style={{ backgroundColor: '#E2E5E6'  }}>
      <Container className="py-5 h-100 my-5">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xl={10}>
            <Card style={{ borderRadius: '1rem' }}>
              <Row className="g-0">
                <Col md={6} lg={5} className="d-none d-md-block">
                  <Card.Img
                    src={loginImage}
                    alt="login form"
                    className="img-fluid h-100"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </Col>
                <Col md={6} lg={7} className="d-flex align-items-center">
                  <Card.Body className="p-4 p-lg-5 text-black">
                    <Form onSubmit={handleLogin}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <img className='w-25' src={loginImage1} alt="" />
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Login your account
                      </h5>
                      <Form.Group className="mb-4" controlId="form2Example17">
                        <Form.Control type="email" name='email' placeholder="Email address" className="form-control-lg mb-2" />
                        <Form.Label>Email address</Form.Label>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="form2Example27">
                        <Form.Control type="password" name='password' placeholder="Password" className="form-control-lg mb-2" />
                        <Form.Label>Password</Form.Label>
                      </Form.Group>
                      <div className="pt-1 mb-4">
                        <Button variant="dark" size="lg" type="button">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <a href="#!" className="small text-muted">
                        Forgot password?
                      </a>
                      <p className="mt-2" style={{ color: '#393f81' }}>
                        Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a>
                      </p>
                      <p style={{ color: '#393f81' }}>or login with:</p>
                      <a href="#" className="google-link">
                            <img src={googleImage} alt="Google" />
                        </a>
                      
                      <a href="#!" className="small text-muted">
                        Terms of use. Privacy policy
                      </a>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;

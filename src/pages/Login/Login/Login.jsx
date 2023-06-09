import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import loginImage1 from '../../../assets/loginImage/3.png';
import loginImage from '../../../assets/loginImage/violin-1617972_1920.jpg';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (formData) => {
    const { email, password } = formData;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire(
          'Great!',
          'User login successfully.',
          'success'
        );
        navigate(from, { replace: true });
      });
  };

  return (
    <section className='loginSection' style={{ backgroundColor: '#E2E5E6' }}>
      <Helmet>
        <title>Harmony Academy| Login</title>
      </Helmet>
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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <img className='w-25' src={loginImage1} alt="" />
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Login your account
                      </h5>
                      <Form.Group className="mb-4" controlId="form2Example17">
                        <Form.Control type="email" name='email' id="form3Example3" {...register("email", { required: true })} placeholder="Email address" className="form-control-lg mb-2" />
                        {errors.email && <span className='text-danger'>Email is required</span>}
                      </Form.Group>
                      <Form.Group className="mb-4">
                      <div className="input-group">
                        <Form.Control
                          name="password"
                          type={showPassword ? "text" : "password"}
                          id="form3Example4"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                          })}
                          placeholder="Password"
                          className="form-control-lg mb-2"
                        />
                        <span className="input-group-append" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <FaEyeSlash className="FaEye mb-2" /> : <FaEye className="FaEye mb-2" />}
                        </span>
                      </div>
                        {errors.password?.type === 'required' && <span className='text-danger'>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className='text-danger'>Password must be 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span className='text-danger'>Password must be less than 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span className='text-danger'>Password must have one uppercase, one lowercase, and one special character</span>}
                      </Form.Group>
                      <input className="mb-4 px-4 py-2 btn btn-dark" type="submit" value="Login" />
                    </Form>
                    <a href="#!" className="small text-muted">
                      Forgot password?
                    </a>
                    <p className="mt-2" style={{ color: '#393f81' }}>
                      Don't have an account? <Link style={{ color: '#393f81' }} to="/signup">Register</Link>
                    </p>
                    <p style={{ color: '#393f81' }}>or login with:</p>

                    <SocialLogin></SocialLogin>

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

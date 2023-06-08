import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './SignUp.css'
import googleImage from '../../../assets/loginImage/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';


const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log('User profile info updated');
            reset();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'User created successfully',
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          })
          .catch(error => console.log(error));
      });
  };

  return (
    <Container>
      <Helmet>
        <title>Harmony Academy| Register</title>
      </Helmet>
      <section className="text-center signupSection">
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1621419203051-f4e463849784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
            height: '300px'
          }}
        ></div>

        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: '-100px',
            background: 'hsla(0, 0%, 100%, 0.8)',
            backdropFilter: 'blur(30px)'
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Registration now</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-4">
                    <Form.Control type="text" id="form3Example1" placeholder="Name" {...register("name", { required: true })} name='name' />
                    {errors.name && <span className='text-danger'>Name is required</span>}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control type="email" name='email' id="form3Example3" {...register("email", { required: true })} placeholder="Email address" />
                    {errors.email && <span className='text-danger'>Email is required</span>}
                  </Form.Group>

                  <Row className="mb-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control name='password' type="password" id="form3Example4" {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 20,
                          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="Password" />
                        {errors.password?.type === 'required' && <span className='text-danger'>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className='text-danger'>Password must be 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span className='text-danger'>Password must be less than 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span className='text-danger'>Password must have one uppercase, one lowercase, and one special character</span>}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control name='confirm' {...register("confirm", {
                          required: true,
                          minLength: 6,
                          maxLength: 20,
                          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} type="password" id="form3Example4" placeholder="Confirm Password" />
                        {errors.confirm?.type === 'required' && <span className='text-danger'>Password is required</span>}
                        {errors.confirm?.type === 'minLength' && <span className='text-danger'>Password must be 6 characters</span>}
                        {errors.confirm?.type === 'maxLength' && <span className='text-danger'>Password must be less than 20 characters</span>}
                        {errors.confirm?.type === 'pattern' && <span className='text-danger'>Password must have one uppercase, one lowercase, and one special character</span>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Control type="text" {...register("photoURL", { required: true })} name='photoURL' placeholder="Photo URL" className="input-field" />
                    {errors.photoURL && <span className='text-danger'>Photo URL is required</span>}
                  </Form.Group>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <Form.Check
                      className="me-2"
                      type="checkbox"
                      id="form2Example33"
                      label="I agree to the terms and conditions"
                    />
                  </div>

                  <Button variant="warning" type="submit" className="btn-block mb-4">
                    Register Now
                  </Button>
                </Form>
                <div className="text-center">
                  <p>or register with:</p>
                  <a href="#" className="google-link1">
                    <img src={googleImage} alt="Google" />
                  </a>
                </div>
                <span>Already Have an Account? <Link to="/login" style={{ color: '#393f81' }}>Login</Link> </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;

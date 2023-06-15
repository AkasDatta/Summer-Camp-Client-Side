import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = (data) => {
    const { name, email, password, confirm, photoURL } = data;

    if (password !== confirm) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password and confirm password do not match!',
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(name, photoURL)
          .then(() => {
            const mySaveUser = {name: name, email: email}
            fetch('https://summer-camp-server-pi.vercel.app/savedusers',{
              method: 'POST',
              headers: {
                'content-type':'application/json'
              },
              body: JSON.stringify(mySaveUser)
            })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){
                reset();
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'User created successfully',
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate('/');
              }
            })
        
          })
          .catch((error) => console.log(error));
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
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621419203051-f4e463849784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
            height: '300px',
          }}
        ></div>

        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: '-100px',
            background: 'hsla(0, 0%, 100%, 0.8)',
            backdropFilter: 'blur(30px)',
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
                            className="form-control mb-2"
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
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <div className="input-group">
                          <Form.Control
                            name="confirm"
                            type={showConfirmPassword ? "text" : "password"}
                            id="form3Example5"
                            {...register("confirm", {
                              required: true,
                              validate: value => value === password || "Passwords do not match",
                              minLength: 6,
                              maxLength: 20,
                              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                            placeholder="Confirm Password"
                            className="form-control mb-2"
                          />
                          <span className="input-group-append" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEyeSlash className="FaEye mb-2" /> : <FaEye className="FaEye mb-2" />}
                          </span>
                        </div>
                        {errors.confirm?.type === 'required' && <span className='text-danger'>Confirm password is required</span>}
                        {errors.confirm?.type === 'validate' && <span className='text-danger'>{errors.confirm.message}</span>}
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
                    className="me-2 custom-checkbox"
                    type="checkbox"
                    id="form2Example33"
                    label="I agree to the terms and conditions"
                    custom
                  />
                  </div>

                  <Button variant="warning" type="submit" className="btn-block mb-4">
                    Register Now
                  </Button>
                </Form>
                <div className="text-center">
                  <p>or register with:</p>
                  <SocialLogin></SocialLogin>
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

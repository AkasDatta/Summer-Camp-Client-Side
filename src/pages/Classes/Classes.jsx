import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => {
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        const topClasses = sortedClasses.slice(0, 6);
        setClasses(topClasses);
      })
      .catch(error => console.log(error));
  }, []);

  const handleAddToCart = item => {
    console.log(item);
    if(user){
        fetch('http://localhost:5000/carts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }   
    else {
      Swal.fire({
        title: 'Please Login First!',
        text: "You need to login before selecting the course.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}});
        }
      });
    }    
  };

  return (
    <div>
      <Helmet>
        <title>Harmony Academy | Classes</title>
      </Helmet>
      <div className="container my-5 py-3 pb-5">
        <div className='text-center mt-5'>
          <h1 style={{ color: '#474743', fontWeight: 'bold' }}>OUR CLASSES</h1>
          <p className='fs-4 text-muted mb-5'>
            Our experienced, passionate, and inspiring instructors provide exceptional guidance and foster talent.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {classes.map(classData => (
            <Col key={classData._id}>
              <Card>
                <Card.Img variant='top' src={classData.photo} alt={classData.name} />
                <Card.Body>
                  <Card.Title className='fw-bold fs-3 my-3' style={{ color: '#C25934' }}>{classData.name}</Card.Title>
                  <Card.Title className='fw-bold my-3'>Instructor Name: {classData.instructor}</Card.Title>
                  <Card.Text> <b>Available Seats:</b> {classData.availableseats}</Card.Text>
                  <Card.Text> <b>Price:</b> <span style={{ color: '#0C4B65' }}>${classData.price}</span></Card.Text>
                  <Card.Text>
                    {classData.description}
                  </Card.Text>
                  <Button className='btn btn-warning px-4' onClick={handleAddToCart}>Select</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Classes;

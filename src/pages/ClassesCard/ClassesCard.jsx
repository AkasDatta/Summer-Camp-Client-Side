import { useContext } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const ClassesCard = ({ classes }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (_id, name, instructor, photo, availableseats, price, description) => {
    console.log(name);
    if (user && user.email) {
      const cartItem = {
        musicId: _id,
        name,
        photo,
        instructor,
        availableseats,
        price,
        description,
        email: user.email,
      };
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please Login First!',
        text: 'You need to login before selecting the course.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {classes.map(({ _id, name, instructor, photo, availableseats, price, description }) => (
          <Col key={_id}>
            <Card>
              <Card.Img variant='top' src={photo} alt={name} />
              <Card.Body>
                <Card.Title className='fw-bold fs-3 my-3' style={{ color: '#C25934' }}>{name}</Card.Title>
                <Card.Title className='fw-bold my-3'>Instructor Name: {instructor}</Card.Title>
                <Card.Text><b>Available Seats:</b> {availableseats}</Card.Text>
                <Card.Text><b>Price:</b> <span style={{ color: '#0C4B65' }}>${price}</span></Card.Text>
                <Card.Text>
                  {description}
                </Card.Text>
                <Button className='btn btn-warning px-4' onClick={() => handleAddToCart(_id, name, instructor, photo, availableseats, price, description)}>Select</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClassesCard;

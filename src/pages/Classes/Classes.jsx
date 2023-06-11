import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('classes.json')
      .then(res => res.json())
      .then(data => {
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        const topClasses = sortedClasses.slice(0, 6);
        setClasses(topClasses);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSelect = () => {
    console.log('User logged in. Redirecting to dashboard...');
    navigate('/dashboard'); // Redirect to the dashboard component
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
                  <Button className='btn btn-warning px-4' onClick={handleSelect}>Select</Button>
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

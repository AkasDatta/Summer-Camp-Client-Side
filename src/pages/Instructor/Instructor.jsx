import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch('https://summer-camp-server-pi.vercel.app/instructors')
      .then(res => res.json())
      .then(data => {
        setInstructor(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Harmony Academy| Instructor</title>
      </Helmet>
      <div className="container my-5 py-3 pb-5">
        <div className='text-center mt-5'>
          <h1 style={{ color: "#474743", fontWeight: 'bold' }}>OUR INSTRUCTOR</h1>
          <p className='fs-5 text-muted mb-5'>
          Discover the art of music with our exceptional and dedicated music instructors, providing expert guidance and inspiring musical journeys.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {instructor.map(classData => (
            <Col key={classData._id}>
              <Card mb-3 style={{ maxWidth: '540px' }}>
                <Row g-0>
                  <Col md={4}>
                    <Card.Img src={classData.photo} className="img-fluid rounded-start" alt={classData.name} />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title className='card-title'>{classData.name}</Card.Title>
                      <Card.Text>{classData.description}</Card.Text>
                      <Card.Text><small className='text-muted'><span className='text-dark'>Email: </span>{classData.email}</small></Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Instructor;

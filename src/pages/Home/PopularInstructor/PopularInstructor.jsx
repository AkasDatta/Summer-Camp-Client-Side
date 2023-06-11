import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        const sortedInstructor = data.sort((a, b) => b.students - a.students);
        const topInstructor = sortedInstructor.slice(0, 6);
        setInstructor(topInstructor);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container my-5 py-3">
      <div className='text-center'>
        <h1 style={{ color: "#474743", fontWeight: 'bold' }}>LEAD TEACHERS</h1>
        <p className='fs-4 text-muted'>
          The names we are proud of
        </p>
        <p className='text-center mb-5 mt-3' style={{ color: '#0C4B65' }}>
          Expert instructors inspiring musical growth and fostering talent with their unwavering passion and exceptional guidance.
        </p>
      </div>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {instructor.map(classData => (
          <Col key={classData._id}>
            <Card>
              <div style={{ position: 'relative' }}>
                <Card.Img variant='top' src={classData.photo} alt={classData.name} />
                <div style={{ position: 'absolute', bottom: '50px', left: '0', right: '0', background: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '10px' }}>
                  {classData.role}
                </div>
              </div>
              <Card.Body> 
                <Card.Title className='text-center fw-bold fs-3 my-3' style={{ color: '#0C4B65' }}>{classData.name}</Card.Title>
                <Card.Text>
                  {classData.description}
                </Card.Text>
                <Card.Text className='fw-bold'>
                  <span className='fs-5'>Email:</span> {classData.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularInstructor;

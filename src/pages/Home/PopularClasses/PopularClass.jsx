import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PopularClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('classes.json')
      .then(res => res.json())
      .then(data => {
        // Sort the classes based on the number of students in descending order
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        // Slice the top 6 classes
        const topClasses = sortedClasses.slice(0, 6);
        setClasses(topClasses);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='container my-5 py-3'>
     <div className='text-center'>
        <h1 style={{ color: '#C25934', fontWeight: 'bold' }}>Our Classes</h1>
        <h2 className='display-4 fw-bold' style={{ color: '#0C4B65' }}>
            Most Popular Classes
        </h2>
        <p
            className='text-center mb-5 mt-3'
            style={{ color: '#0C4B65' }}
        >
            Explore our popular music classes designed for aspiring musicians of all levels. From beginner-friendly lessons to advanced workshops, our comprehensive courses cover a wide range of musical disciplines. Join our community of passionate learners and take your musical skills to new heights.
        </p>
     </div>

      <Row xs={1} md={2} lg={3} className='g-4'>
        {classes.map(classData => (
          <Col key={classData._id}>
            <Card>
              <Card.Img variant='top' src={classData.photo} alt={classData.name} />
              <Card.Body>
                <Card.Title className='text-center fw-bold fs-3 my-3' style={{ color: '#C25934'}}>{classData.name}</Card.Title>
                <Card.Text>
                  {classData.description}
                </Card.Text>
                <Row> 
                    <Col><b>Seats:</b> {classData.seats}</Col>
                    <Col><b>Available Seats:</b> {classData.availableseats}</Col> 
                </Row>
                <Card.Text> <b>Price:</b> <span style={{color: '#0C4B65'}}>${classData.price}</span></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularClass;

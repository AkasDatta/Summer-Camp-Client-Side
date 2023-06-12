import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ClassesCard from '../ClassesCard/ClassesCard';
import { Row } from 'react-bootstrap';


const Classes = () => {
  const [classes, setClasses] = useState([]);

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
        {
          classes?.map((items, index) => {
            return (
              <ClassesCard key={index} items={items} />
            )
          })
        }
        </Row>
      </div>
    </div>
  );
};

export default Classes;

import { Helmet } from 'react-helmet-async';
import ClassesCard from '../ClassesCard/ClassesCard';
import { Row } from 'react-bootstrap';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
  // const [classes, setClasses] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/classes')
  //     .then(res => res.json())
  //     .then(data => {
  //       setClasses(data);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  const [classes] = useClasses();
  const activeInstructors = classes.filter(c => c.status === 'Active');
  console.log(activeInstructors);

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
          {activeInstructors.length ? activeInstructors.map((instructor, index) => (
            <ClassesCard key={index} item={instructor} />
          )) : ""}
        </Row>
      </div>
    </div>
  );
};

export default Classes;

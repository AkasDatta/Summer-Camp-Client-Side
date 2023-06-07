import { Link } from 'react-router-dom';
import './ErrorPage.css'
import error from '../../assets/1_C8_Bkzt7pPbkztckqEvmqg (1).png'
// import useTitle from '../../hooks/useTitle';


const ErrorPage = () => {
    // useTitle('Error')
    return (
        <div className='text-center error' style={{backgroundColor:'#E2E5E6'}}>
            <img className='errorImg w-25' src={error} alt="" />
            <h2>Something went wrong.</h2>
            <p>We're sorry, but the page you're looking for could not be found.</p>
            <p>Let's get you <Link
                to='/'
            >back</Link>
            </p>
        </div>
    );
};

export default ErrorPage;
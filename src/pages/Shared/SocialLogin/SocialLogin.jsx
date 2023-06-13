import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import googleImage from '../../../assets/loginImage/google.png'
import { useContext } from "react";
import './SocialLogin.css';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const mySaveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
        fetch('http://localhost:5000/savedusers',{
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(mySaveUser)
        })
        .then(res => res.json())
        .then(() => {
            navigate(from, { replace: true });
        })

      })
  }
  
  return (
    <div>
      <a onClick={handleGoogleSignIn} href="#" className="google-link">
        <img src={googleImage} alt="Google" />
      </a>
    </div>
  );
};

export default SocialLogin;

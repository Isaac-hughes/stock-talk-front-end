import '../App.css';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import {getUserByToken} from "../utils/getUserByToken"
import {useAuth} from "../utils/useAuth"
import clip from '../assets/landing.mp4';

//updated by fergus

const Landing = ({user, setUser, isAuthenticated, setIsAuthenticated}) => {

  useAuth(setIsAuthenticated)

  if(user.name == undefined && isAuthenticated){
    getUserByToken(setUser)
  }

  return (
    <div className="Landing">
<<<<<<< HEAD
      <h1>Sociabull</h1>
      <nav>
=======
      <nav className="mainNav">
>>>>>>> 8ab0875ce008e4bbdc30af20a5a683b4daa74bd7
        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </nav>
<<<<<<< HEAD
      
=======
      <h1>Sociabull</h1>
        <video width="400px" height="400px" autoPlay loop muted className="top-vid">
          <source src={clip} type="video/mp4" />
        </video>
>>>>>>> 8ab0875ce008e4bbdc30af20a5a683b4daa74bd7
    </div>
  );
}

export default Landing;
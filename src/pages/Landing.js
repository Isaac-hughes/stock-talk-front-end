import '../App.css';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import {getUserByToken} from "../utils/getUserByToken"
import {useAuth} from "../utils/useAuth"
import clip from '../assets/landing.mp4';

const Landing = ({user, setUser, isAuthenticated, setIsAuthenticated}) => {

  useAuth(setIsAuthenticated)

  if(user.name == undefined && isAuthenticated){
    getUserByToken(setUser)
  }

  return (
    <div className="Landing">
      <nav className="mainNav">
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
      <h1>Sociabull</h1>
        <video width="400px" height="400px" autoPlay loop muted className="top-vid">
          <source src={clip} type="video/mp4" />
        </video>
    </div>
  );
}

export default Landing;
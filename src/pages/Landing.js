import '../App.css';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import {getUserByToken} from "../utils/getUserByToken"
import {useAuth} from "../utils/useAuth"


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
    </div>
  );
}

export default Landing;
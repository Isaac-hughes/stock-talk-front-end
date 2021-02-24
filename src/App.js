import React, {useState} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import {useAuth} from "./utils/useAuth"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  useAuth(setIsAuthenticated)
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      
      <Switch>
        
        <Route exact path="/">
          <Landing />
        </Route>
        
        <Route exact path='/home' render = {() => isAuthenticated ? <Home user={user} /> : <Redirect to="/" />}
        />
        
        <Route path="/Login" render = {() => (
          <Login setUser={setUser}/>
        )}/>

        <Route path="/Signup" render = {() => (
          <Signup setUser={setUser}/>
        )}/>

        
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;

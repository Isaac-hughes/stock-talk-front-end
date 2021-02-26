import React, {useState} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import {useAuth} from "./utils/useAuth"
import {getUserByToken} from "./utils/getUserByToken"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import LogoutButton from './components/logout'
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  useAuth(setIsAuthenticated)

  if(user.name == undefined && isAuthenticated){
    getUserByToken(setUser)
  }

  return (
    <BrowserRouter>
    <div>

      
      <Switch>
        
        <Route exact path="/landing">
          <Landing user={user} setUser={setUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        
        
        <Route path="/Login" render = {() => 
          isAuthenticated ? <Redirect to="/home"/> : <Login user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
        }/>

        <Route path="/Signup" render = {() => 
          isAuthenticated ? <Redirect to="/home"/> : <Signup user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
        }/>

        <Route exact path='/home' render = {() => isAuthenticated ? <Home user={user} setIsAuthenticated={setIsAuthenticated} /> : <Redirect to="/landing" />}
        />
        
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;

import '../App.css';
import React, {useState} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import clip from '../assets/landing.mp4';

const LogIn = ({user, setUser, setIsAuthenticated}) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")


    const formHandler = async (e) => {
        e.preventDefault()

        const response = await fetch("https://sociabull.herokuapp.com/users/login", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })
        const data = await response.json()
        if(response.status === 200){
            localStorage.setItem("dataToken", data.token)
            await setUser(data)
            setIsAuthenticated(true)
            
        } else {
            console.log("Login failed")
            setError(data.message)
        }
    }

    return (
        <div>
            <p className="error">{error}</p>
            <form onSubmit={formHandler}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                <button>Login</button>
            </form>
            <br></br>
        <div className="loginPage">
            <nav className="mainNav gradient-border">
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
            </div>
            <h1>Sociabull</h1>
            <br></br>
            <video width="150px" height="150px" autoPlay loop muted className="loginVid">
            <source src={clip} type="video/mp4"/>
            </video>
        </div>
    )
}
export default LogIn
import '../App.css';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'


import React, {useState} from 'react'

const SignUp = ({setUser, setIsAuthenticated}) => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

    const formHandler = async (e) => {
        e.preventDefault()
        
        const response = await fetch("https://sociabull.herokuapp.com/users", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                email: email,
                password: pass,
                username: username
            })
        })
        const data = await response.json()
        
        if(response.status === 201){
            localStorage.setItem("dataToken", data.token)
            await setUser(data.savedUser)
            setIsAuthenticated(true)
        } else {
            setError(data.message)
        }
    }


    return (
        <div className="signupPage">

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
            <p className="error">{error}</p>
            <form onSubmit={formHandler} className="signupForm">
            <div className="signupSep">
                <input className="signup-input" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input className="signup-input" type="text" placeholder="Username" pattern="[a-z0-9]+" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="signupSep">
                <input className="signup-input" type="email" maxLength="256" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input className="signup-input" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
            </div>
                <button className="signUpButton">Sign Up</button>
            </form>

            <div id="message">
                <h3>Password must contain the following:</h3>
                <p id="letter">A <b>lowercase</b> letter</p>
                <p id="capital">A <b>capital (uppercase)</b> letter</p>
                <p id="number">A <b>number</b></p>
                <p id="length">Minimum <b>8 characters</b></p>
            </div>
        </div>
    )
}
export default SignUp
import '../App.css';
import React, {useState} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'

//updated by fergus

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
<<<<<<< HEAD
        <div>
            <p className="error">{error}</p>
            <form onSubmit={formHandler}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                <button>Login</button>
            </form>
            <nav>
=======
        <div className="loginPage">
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
        </div>
    )
}
export default LogIn
import '../App.css';

import React, {useState} from 'react'

const SignUp = ({setUser}) => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

    const formHandler = async (e) => {
        e.preventDefault()
        console.log(name, username, email, pass)

        const response = await fetch("http://localhost:5000/users", {
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
        console.log(data)
        if(response.status === 201){
            setUser(data.savedUser)
            localStorage.setItem("dataToken", data.token)
        } else {
            console.log("Sign up failed")
            setError("Error")
        }
    }


    return (
        <div className="signupPage">
            <p>{error}</p>
            <form onSubmit={formHandler}>
                <input className="signup-input" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input className="signup-input" type="text" placeholder="Username" pattern="[A-Za-z0-9]+" onChange={(e) => setUsername(e.target.value)} />
                <input className="signup-input" type="email" pattern=".+@globex.com" maxlength="256" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input className="signup-input" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                <button>Sign Up</button>
            </form>

            <div id="message">
                <h3>Password must contain the following:</h3>
                <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                <p id="number" className="invalid">A <b>number</b></p>
                <p id="length" className="invalid">Minimum <b>8 characters</b></p>
            </div>
        </div>
    )
}
export default SignUp
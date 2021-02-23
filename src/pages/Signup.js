import '../App.css';

import React, {useState} from 'react'

const SignUp = ({setUser}) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const formHandler = async (e) => {
        e.preventDefault()
        console.log(username, email, pass)

        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: pass,
                username: username
            })
        })
        const data = await response.json()
        console.log(data)
        setUser(data.savedUser)
        localStorage.setItem("dataToken", data.token)
    }


    return (
        <form onSubmit={formHandler}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
            <button>Sign Up</button>
        </form>
    )
}
export default SignUp
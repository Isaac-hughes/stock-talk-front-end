import React, {useState} from 'react'

const PostBox = () => {
    const [content, setContent] = useState("")
    const [error, setError] = useState("")


    const formHandler = async (e) => {
        e.preventDefault()
        e.target.reset()
        const response = await fetch("https://sociabull.herokuapp.com/posts", {
            method: "POST",
            headers:{"Authorization": `Bearer ${localStorage.getItem("dataToken")}`, "Content-Type": "application/json"},
            body: JSON.stringify({
                content: content
            })
        })
        const data = await response.json()
        if(response.status === 201){
            console.log("Post Success")
            
        } else {
            console.log("Post failed")
            setError(data.message)
        }
    }

    return (
        <div className="postBoxWrapperInner">
            <p className="error">{error}</p>
            <form onSubmit={formHandler}>
                <input className="postBox" type="text" placeholder="Make a post" onChange={(e) => setContent(e.target.value)} />
                <button className="postButton">Post</button>
            </form>
        </div>
    )
}

export default PostBox
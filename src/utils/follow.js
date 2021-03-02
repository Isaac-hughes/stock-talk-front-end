export const follow = async (id, username) => {

    const sendData = {
        _id: id,
        username: username
    }
    
    const response = await fetch('http://localhost:5000/users/follow', {
        method: 'PATCH',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`, "Content-Type": "application/json"},
        body: JSON.stringify(sendData)
    })
    const data = await response.json()
    if (response.status === 404){
        console.log("Unauthorized")
    } else {
        console.log("followed user")
    }
    
}

export const unfollow = async (id, username) => {

    const sendData = {
        _id: id,
        username: username
    }
    
    const response = await fetch('http://localhost:5000/users/unfollow', {
        method: 'PATCH',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`, "Content-Type": "application/json"},
        body: JSON.stringify(sendData)
    })
    const data = await response.json()
    if (response.status === 404){
        console.log("Unauthorized")
    } else {
        console.log("unfollowed user")
    }
}
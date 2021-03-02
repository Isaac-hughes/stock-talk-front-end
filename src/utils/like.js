export const like = async (id) => {

    const sendData = {_id: id}
    
    const response = await fetch('https://sociabull.herokuapp.com/posts/like', {
        method: 'PATCH',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`, "Content-Type": "application/json"},
        body: JSON.stringify(sendData)
    })
    const data = await response.json()
    if (response.status === 404){
        console.log("Unauthorized")
    } else {
        console.log("liked the post")
    }
}

export const unlike = async (id) => {
    const sendData = {_id: id}
    const response = await fetch('https://sociabull.herokuapp.com/posts/unlike', {
        method: 'PATCH',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`, "Content-Type": "application/json"},
        body: JSON.stringify(sendData)
    })
    const data = await response.json()
    if (response.status === 404){
        console.log("Unauthorized")
    } else {
        console.log("unliked the post")
    }
}
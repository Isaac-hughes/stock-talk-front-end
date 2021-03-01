
export const getPost = async (id) => {

    const myHeaders = new Headers()
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("dataToken")}`)
    myHeaders.append("Content-Type", "application/json")
    console.log(myHeaders)
    const sendData = {_id: `${id}`}
    console.log(sendData)
    const response = await fetch("http://localhost:5000/posts/getbyid", {
            method: "GET",
            headers: myHeaders,
            body: JSON.stringify(sendData)
        })
        const data = await response.json()
        if(response.status === 200){
            return data
        } else {
            console.log("Could not get post")  
        }
}


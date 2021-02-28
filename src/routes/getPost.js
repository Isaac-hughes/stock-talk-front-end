
export const getPost = (id) => {
    const response = await fetch("http://localhost:5000/posts/getbyid, {
            method: "GET",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                _id: id,
                
            })
        })
        const data = await response.json()
        if(response.status === 200){
            return data
        } else {
            console.log("Could not get post")  
        }
}


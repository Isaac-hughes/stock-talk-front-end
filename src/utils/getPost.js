
export const getPost = async (id) => {
    const response = await fetch(`http://localhost:5000/posts/getbyid/${id}`, {
            method: "GET",
            headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`},
            
        })
        const data = await response.json()
        if(response.status === 200){
            return data
        } else {
            console.log("Could not get post")  
        }
}


export const getUserByToken = async (setUser) => {
    
    const response = await fetch('http://localhost:5000/users/myprofile', {
        method: 'GET',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`}
    })
    const data = await response.json()
    if (response.status === 401){
        console.log("Unauthorized")
    } else {
        setUser(data)
    }
}
export const getUserByToken = async (setUser) => {
    
    const response = await fetch('https://sociabull.herokuapp.com/users/myprofile', {
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
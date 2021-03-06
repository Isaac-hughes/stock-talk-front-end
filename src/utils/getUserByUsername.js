export const getUserByUsername = async (username, setIsLoaded) => {
    const response = await fetch(`https://sociabull.herokuapp.com/users/${username}`, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`}
    })
    const data = await response.json()
    if (response.status === 404){
        console.log("Unauthorized")
        console.log(data)
    } else {
        return data
    }
}
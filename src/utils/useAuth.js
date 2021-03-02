
export const useAuth = async (setAuthentication) => {
    
    const response = await fetch('https://sociabull.herokuapp.com/users/myprofile', {
        method: 'GET',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`}
    })
    if (response.status === 401){
        setAuthentication(false)
        console.log("Unauthorized")
    } else {
        setAuthentication(true)
    }
}
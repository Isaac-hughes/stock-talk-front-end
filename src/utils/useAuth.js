
export const useAuth = async (setAuthentication) => {
    const response = await fetch('http://localhost:5000/users/myprofile', {
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
export const getPostsByUsername = async (username) => {

    const response = await fetch(`https://sociabull.herokuapp.com/posts/getbyuser/${username}`, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`}
    })
    
    const data = await response.json()
    return data
}
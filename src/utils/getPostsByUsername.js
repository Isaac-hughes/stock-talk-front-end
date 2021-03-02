export const getPostsByUsername = async (username, setPosts, setPostLoaded) => {
    const response = await fetch(`http://localhost:5000/posts/getbyuser/${username}`, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`}
    })
    
    const data = await response.json()
    setPosts(data)
    setPostLoaded(true)
}
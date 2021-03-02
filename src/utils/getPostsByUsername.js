export const getPostsByUsername = async (username, setPosts, setPostLoaded) => {
    const response = await fetch(`https://sociabull.herokuapp.com/posts/getbyuser/${username}`, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`}
    })
    
    const data = await response.json()
    setPosts(data)
    setPostLoaded(true)
}
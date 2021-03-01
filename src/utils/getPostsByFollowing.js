export const getPostsByFollowing = async (setPosts, setPostLoaded) => {
    const response = await fetch('http://localhost:5000/posts/getbyfollowing', {
        method: 'GET',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`}
    })
    
    const data = await response.json()
    
    setPosts(data)
    setPostLoaded(true)
}
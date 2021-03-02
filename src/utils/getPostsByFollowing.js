export const getPostsByFollowing = async (setPosts, setPostLoaded) => {
    const response = await fetch('https://sociabull.herokuapp.com/posts/getbyfollowing', {
        method: 'GET',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`}
    })
    
    const data = await response.json()
    
    setPosts(data)
    setPostLoaded(true)
}
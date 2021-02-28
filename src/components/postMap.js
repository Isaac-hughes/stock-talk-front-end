import '../App.css';
import React, {useState} from 'react'
import {getPostsByFollowing} from '../utils/getPostsByFollowing'

const PostMap = ({user}) => {
    const [canLoad, setCanLoad] = useState(false)
    const [posts, setPosts] = useState([])
    const [postLoaded, setPostLoaded] = useState(false)
    
    if(user.username != undefined){
        console.log("a")
        if(!canLoad){
            console.log("b")
            setCanLoad(true)
            getPostsByFollowing(setPosts, setPostLoaded)
        }
    } else {
        console.log("name undifined")
        console.log(user)
    }

    if(canLoad){
        console.log("c")
        if(postLoaded){
            console.log("map called")
            console.log(posts)
            return(
                posts.map((data, index) => {
                    return (
                        <div key={index} className="postWrapper">
                            <p>{data.content}</p>
                            <p>{data.username}</p>
                            <p>{data.likes.length} likes</p>
                        </div>    
                    )
                })
            )
        } else {
            console.log("posts loading")
            return (
                <div>
                    <p> Posts Loading... </p>
                </div>
            )
        }
    }else{
        return(
            <div>
                <p> Posts Loading... User not Found</p>
            </div>
        )
    }

  
}

export default PostMap;
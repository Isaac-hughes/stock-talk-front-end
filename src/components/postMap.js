import '../App.css';
import React, {useState} from 'react'
import {getPostsByFollowing} from '../utils/getPostsByFollowing'
import LikeButton from './likeButton'

const PostMap = ({user}) => {
    const [canLoad, setCanLoad] = useState(false)
    const [posts, setPosts] = useState([])
    const [postLoaded, setPostLoaded] = useState(false)

    
    if(user.username !== undefined){
        if(!canLoad){
            setCanLoad(true)
            getPostsByFollowing(setPosts, setPostLoaded)
        }
    } else {
        console.log("name undifined")
    }

    if(canLoad){
        if(postLoaded){
            return(
                posts.map((data, index) => {
                    
                    return (
                        <div key={index} className="postWrapper">
                            <p>{data.content}</p>
                            <p>{data.username}</p>
                            <LikeButton id={data._id} user={user} likeCount={data.likes.length} />
                            
                        </div>    
                    )
                })
            )
        } else {
            return (
                <div>
                    <p> Posts Loading... </p>
                </div>
            )
        }
    }else{
        return(
            <div>
                <p> Posts Loading...</p>
            </div>
        )
    }

  
}

export default PostMap;
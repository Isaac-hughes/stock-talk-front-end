import '../App.css';
import React, {useState} from 'react'
import {getPostsByFollowing} from '../utils/getPostsByFollowing'
import LikeButton from './likeButton'
import FollowButton from './followButton'
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'

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
        // user is not defined
        console.log("name undifined")
    }

    if(canLoad){
        if(postLoaded){
            return(
                posts.map((data, index) => {
                    
                    return (
                        <div key={index} className="postWrapper">
                            <p className="postContent">{data.content}</p>
                            <div className="postBottom">
                                <LikeButton id={data._id} user={user} likeCount={data.likes.length} />
                                <Link to={`/userinfo/${data.username}`} className="username">{data.username}</Link>

                            </div>
                            
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
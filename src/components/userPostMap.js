import '../App.css';
import React, {useState, useEffect} from 'react'
import {getPostsByUsername} from '../utils/getPostsByUsername'
import LikeButton from './likebutton'
import FollowButton from './followButton'
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'


const UserPostMap = ({user}) => {
    const [canLoad, setCanLoad] = useState(false)
    const [posts, setPosts] = useState([])
    const [postLoaded, setPostLoaded] = useState(false)

    
    

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPostsByUsername(user.username)
            setPosts(data);
            setPostLoaded(true);
            setCanLoad(true)
        };
        fetchData();
    }, []);
    

    if(canLoad){
        return(
            posts.map((data, index) => {
                return (
                    <div key={index} className="postWrapper">
                        <p>{data.content}</p>
                        <p>{data.username}</p>
                        <LikeButton id={data._id} user={user} likeCount={data.likes.length} />
                        <FollowButton user={user} author={data.username} authorID={data.author}/>
                    </div>    
                )
            })
        )    
    }else{
        return(
            <div>
                <p> Posts Loading... </p>
            </div>
        )
    }

  
}

export default UserPostMap;
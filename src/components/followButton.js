import '../App.css';
import React, {useState} from 'react'
import {follow, unfollow} from '../utils/follow'

const FollowButton = ({user, author, authorID}) => {

    let ownPost = false
    if(author === user.username){
        ownPost = true
    }

    let bool = false
    let refresh = false
    const handleClick = async () => {
        let following = user.following
        if(!refresh){
            for(let i = 0; i < following.length; i++){
            if(following[i].username === author){
                bool = true
                break
            }
            }
            refresh = true
        }
        console.log(bool)
        if(bool){
            await unfollow(authorID, author)
            console.log("unfollow")
            bool = false
        } else {
            await follow(authorID, author)
            console.log("follow")
            bool = true
        }
    }


    return (
        <div>
            <button className="followButton" onClick={handleClick} disabled={ownPost}>Follow</button>
        </div>
    )
}

export default FollowButton
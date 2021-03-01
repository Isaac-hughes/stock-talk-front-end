import '../App.css';
import React, {useState} from 'react'
import {follow, unfollow} from '../utils/follow'

const FollowButton = ({user, author, authorID}) => {

    const handleClick = async () => {
        let following = user.following
        let bool = false
        console.log(following.length)
        for(let i = 0; i < following.length; i++){
          if(following[i].username === author){
            bool = true
            break
          }
        }
        console.log(bool)
        if(bool){
            unfollow(authorID, author)
            console.log("unfollow")
            
        } else {
            follow(authorID, author)
            console.log("follow")

        }
    }

    return (
        <div>
            <button className="followButton" onClick={handleClick}>Follow</button>
        </div>
    )
}

export default FollowButton
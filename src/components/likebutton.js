import '../App.css';
import React, {useState} from 'react'
import {getPost} from '../utils/getPost'
import {like, unlike} from '../utils/like'


const LikeButton = ({id, user, likeCount}) => {

    const [numLikes, setNumLikes] = useState(likeCount)

    const handleClick = async () => {
        let post = await getPost(id)
        let bool = false
        for(let i = 0; i < post[0].likes.length; i++){
          if(post[0].likes[i].username === user.username){
            bool = true
            break
          }
        }
        if(bool){
            await unlike(id)
            let num = numLikes - 1
            setNumLikes(num)
        } else {
            await like(id)
            let num = numLikes + 1
            setNumLikes(num)

        }
    }

  return (
    <div className="likeButton">
      <p>{numLikes} likes</p>
      <button onClick={handleClick}>&#9825;</button>
    </div>
  );
}

export default LikeButton;
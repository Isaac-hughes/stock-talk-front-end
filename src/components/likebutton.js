import '../App.css';
import {getPost} from '../utils/getPost'

const LikeButton = ({id, user}) => {
    
    const username = user.username

    const handleClick = async () => {
        let post = await getPost(id)
        let bool = post.likes.includes(username)
        if(bool){
            //unlike
            console.log("unlike")
        } else {
            //like
            console.log("like")
        }
    }

  return (
    <div className="likeButton">
      <button onClick={handleClick}>Like</button>
    </div>
  );
}

export default LikeButton;
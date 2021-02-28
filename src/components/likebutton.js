import '../App.css';
import {getPost} from '../routes/getPost'

const LikeButton = (id, user) => {
    
    const username = user.username

    const handleClick = () => {
        let post = getPost(id)
        let bool = post.likes.includes(username)
        if(true){
            //unlike
        } else {
            //like
        }
    }

  return (
    <div className="likeButton">
      <button onClick={handleClick}>Like</button>
    </div>
  );
}

export default LikeButton;
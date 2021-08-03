import { useState } from "react";
import { Favorite, MoreVert, ThumbUpAlt } from "@material-ui/icons";
import "./Post.css";
import { Users } from "../../Data";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(true);

  const handleLike = () => {
    setIsLiked(!isLiked);
    isLiked ? setLike(like + 1) : setLike(like - 1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((user) => user.id === post.userId)[0].profileImg
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAlt
              htmlColor="#0066ff"
              onClick={handleLike}
              className="imageIcon"
              src="assets/like.png"
              alt=""
            />
            <Favorite
              htmlColor="#ff3300"
              className="imageIcon"
              src="assets/heart.png"
              alt=""
            />
            <span className="postLikeCounter">{like} people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

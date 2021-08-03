import Post from "../../post/Post";
import Share from "../../share/Share";
import "./Feed.css";
import { Posts } from "../../../Data";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((item) => (
          <Post key={item.id} post={item} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

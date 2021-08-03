import { Cake } from "@material-ui/icons";
import "./RightBar.css";
import { Users } from "../../../Data";

const HomeRightBar = () => {
  return (
    <>
      <div className="birtdayContainer">
        <Cake htmlColor="#FFECB3" className="birthdayImg" />
        <span className="birthdayText">
          <b>Alperen Yıltekin</b> and <b>2 other friends</b> have a birtday
        </span>
      </div>
      <img src="/assets/adv.jpg" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user) => (
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={user.profileImg}
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
const ProfileRightBar = () => {
  return (
    <>
      <h4 className="rightbarTitle"> About User </h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoKye">Istanbul</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoKye">Istanbul</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoKye">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="/assets/profile-1.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Lily C.</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/assets/profile-1.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Lily C.</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/assets/profile-1.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Lily C.</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/assets/profile-1.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Lily C.</span>
        </div>
      </div>
    </>
  );
};
const RightBar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;

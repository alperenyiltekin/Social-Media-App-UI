import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/sidebar/feed/Feed";
import RightBar from "../../components/sidebar/rightBar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";
const profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="rightTopSide">
            <div className="profileCover">
              <img
                className="profileUserImg"
                src="assets/profile-3.jpg"
                alt=""
              />
              <img className="profileCoverImg" src="assets/post-3.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Lisa T.</h4>
              <span className="profileInfoDesc">Hi Everyone !!</span>
            </div>
          </div>
          <div className="rightBottomSide">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;

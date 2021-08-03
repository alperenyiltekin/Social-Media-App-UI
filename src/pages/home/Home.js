import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/sidebar/feed/Feed";
import RightBar from "../../components/sidebar/rightBar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;

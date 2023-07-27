import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Marketplace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.username}</span>
          </div>
          <div className="item">
            <img src={Friends} />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Marketplace} />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} />
            <span>Fund</span>
          </div>
          <div className="item">
            <img src={Tutorials} />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

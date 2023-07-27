import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import ProfileNavbar from "../../components/profileNavbar/ProfileNavbar";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="cover"
        />
      </div>
      <div className="profileContainer">
        <div className="uinfo">
          <div className="left">
            <div className="profilePic">
              <img
                src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                className="profile"
              />
              <div className="udetails">
                <span className="name">Priyanshu Kunwar</span>
                <span className="friends">10 friends</span>
              </div>
            </div>
          </div>
          <div className="right">
            <button>+ Add to story</button>
            <button className="editProfile">Edit profile</button>
          </div>
        </div>
          <hr />
      </div>
      <div className="profileNavbar">
        <ProfileNavbar/>
      </div>
      <div className="ppost">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;

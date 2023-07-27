import { Link } from "react-router-dom";
import "./ProfileNavbar.scss";

const ProfileNavbar = () => {
  return (
    <div className="profileNavbar">
      <div className="container">
        <Link to="/profile/posts">Posts</Link>
        <Link to="/profile/posts">About</Link>
        <Link to="/profile/posts">Friends</Link>
        <Link to="/profile/posts">Photos</Link>
        <Link to="/profile/posts">Videos</Link>
        <Link to="/profile/posts">Check-ins</Link>
      </div>
    </div>
  );
};

export default ProfileNavbar;

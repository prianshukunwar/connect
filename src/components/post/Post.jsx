import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showLikePopUp, setShowLikePopUp] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    setShowLikePopUp(true);

    // Hide the like pop-up after a short delay (e.g., 800ms)
    setTimeout(() => setShowLikePopUp(false), 800);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} />
        </div>
        <div className="info">
          <div
            className={`item ${liked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            {liked ? (
              <FavoriteOutlinedIcon className="like-pop-up" />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            12 likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <ChatBubbleOutlineOutlinedIcon />
            12 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;

import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import PublishIcon from "@mui/icons-material/Publish";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Post({ tweet, onLike, onComment, onRetweet }) {
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(commentText);
      setCommentText("");
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    onLike();
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
    onRetweet();
  };

  const handleShare = () => {
    const shareData = {
      title: "Check out this Tweet!",
      text: tweet.content,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Content shared successfully"))
        .catch((err) => console.error("Error sharing content:", err));
    } else {
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__main">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Name <span className="post__headerUsername">@username</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{tweet.content}</p>
          </div>
        </div>
        {tweet.image && <img src={tweet.image} alt="Tweet" />}
        <div className="post__footer">
          <div
            onClick={handleLike}
            className={liked ? "liked" : ""}
          >
            <FavoriteBorderIcon fontSize="small" />
            <span>{tweet.likes}</span>
          </div>
          <div
            onClick={() => setShowComments(!showComments)}
          >
            <ChatBubbleOutlineIcon fontSize="small" />
            <span>{tweet.comments.length}</span>
          </div>
          <div
            onClick={handleRetweet}
            className={retweeted ? "retweeted" : ""}
          >
            <RepeatIcon fontSize="small" />
            <span>{tweet.retweets}</span>
          </div>
          <div onClick={handleShare}>
            <PublishIcon fontSize="small" />
          </div>
        </div>
        {showComments && (
          <div className="post__comments">
            {tweet.comments.map((comment, index) => (
              <p key={index} className="post__comment">
                {comment}
              </p>
            ))}
            <form onSubmit={handleAddComment}>
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button type="submit">Add</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;

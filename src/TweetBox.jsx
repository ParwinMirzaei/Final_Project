import React, { useState } from 'react';
import { Avatar, Button } from '@mui/material';
import './TweetBox.css';

function TweetBox({ onTweet }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onTweet(content, image);
      setContent('');
      setImage('');
    }
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handlePost}>
        <div className="tweetBox__input">
          <Avatar
            src="https://foerdern.koelnerzoo.de/images/patenschaften/tiere/flamingo/flamingo-2_1200x900.jpg"
          />
          <input
            type="text"
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button type="submit" className="tweetBox__postButton">
          Post
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

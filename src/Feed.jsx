import React, { useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      content: "A family admires the view of Lower Manhattan's skyline from the 80th floor of the iconic Empire State Building.",
      image: "https://i.natgeofe.com/n/37d04c69-7780-47f3-8f9a-229376f82668/05-best-pod-september-18.jpg?w=2560&h=1708",
      likes: 0,
      retweets: 0,
      comments: [],
    },
  ]);

  const addTweet = (content) => {
    setTweets([
      ...tweets,
      { id: Date.now(), content, image: "", likes: 0, retweets: 0, comments: [] },
    ]);
  };

  const handleLike = (index) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].likes += 1;
    setTweets(updatedTweets);
  };

  const handleComment = (index, comment) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].comments.push(comment);
    setTweets(updatedTweets);
  };

  const handleRetweet = (index) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].retweets += 1;
    setTweets(updatedTweets);
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox onTweet={addTweet} />
      {tweets.map((tweet, index) => (
        <Post
          key={tweet.id}
          tweet={tweet}
          onLike={() => handleLike(index)}
          onComment={(comment) => handleComment(index, comment)}
          onRetweet={() => handleRetweet(index)}
        />
      ))}
    </div>
  );
}

export default Feed;

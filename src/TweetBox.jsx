import { Avatar, Button } from '@mui/material'
import React from 'react';
import "./TweetBox.css";


function TweetBox() {
  
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar
            src ="https://foerdern.koelnerzoo.de/images/patenschaften/tiere/flamingo/flamingo-2_1200x900.jpg" />
            <input
              type = "text"
              placeholder="What's happening" />
        </div>
            <input
              className='tweetBox__imageInput'
              placeholder='Image'
              />
        <Button
          className='tweetBox__postButton'>Post</Button>
      </form>
    </div>
  )
}

export default TweetBox
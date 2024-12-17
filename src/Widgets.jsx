import React from 'react';
import './Widgets.css'; 
import {
  TwitterTimelineEmbed, // Corrected the import name
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import { Height, Search } from '@mui/icons-material';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search 
          className='widgets__SearchIcon'
        />
        <input 
          placeholder='Search Twitter'
          type='text'/>
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>
        {/* Twitter Tweet Embed */}
        <TwitterTweetEmbed 
          tweetId={'1868616622703014125'}
        />
        {/* Twitter Timeline Embed */}
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='pari757323'
          options={{ height: 400 }}
        />
        {/* Twitter Share Button */}
        <TwitterShareButton
        url={'https://www.instagram.com/parwin_mirzaei/'}
        className="widgets__shareButton"
        />
      </div>
    </div>
  );
}

export default Widgets;

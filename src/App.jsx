import React from 'react';
import Sidebar from './Sidebar.jsx';
import SidebarIcons from './SidebarIcons';
import Feed from './Feed';
import TweetBox from './TweetBox.jsx';
import Widgets from './Widgets.jsx';

export const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      {/* Feed Section */}
      <Feed />
      {/* Widget Section */}
      <Widgets />
    </div>
  );
};

export default App;  // Default export

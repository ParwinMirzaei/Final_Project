import React from "react";
import "./Sidebar.css";
import "./App.css"
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


import SidebarIcons from './SidebarIcons';
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon"
        />
        <SidebarIcons 
          Icon = {HomeIcon}
          text = "Home"
        />
        <SidebarIcons 
          Icon = {SearchIcon}
          text = "Explore"
        />
        <SidebarIcons 
          Icon = {NotificationNoneIcon}
          text = "Notifications"
        />
        <SidebarIcons 
          Icon = {MailOutlineIcon}
          text = "Message"
        />
        <SidebarIcons
          Icon = {BookmarkBorderIcon}
          text = "Bookmarks"
        />
        <SidebarIcons 
          Icon = {ListAltIcon}
          text = "Lists"
        />
        <SidebarIcons 
          Icon = {PermIdentityIcon}
          text = "Profile"
        />
        <SidebarIcons 
          Icon = {MoreHorizIcon}
          text = "More"/>
          <Button className="sidebar__tweet" variant="outlined">Tweet</Button>
    </div>
  );
}

export default Sidebar;

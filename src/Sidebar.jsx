import React, { useState } from "react";
import "./Sidebar.css";
import "./App.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import SidebarIcons from "./SidebarIcons";
import { Button } from "@mui/material";

function Sidebar() {
  // State for active option
  const [activeOption, setActiveOption] = useState("Home");

  // Function to handle active change
  const handleSetActive = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarIcons
        Icon={HomeIcon}
        text="Home"
        active={activeOption === "Home"}
        onClick={() => handleSetActive("Home")}
      />
      <SidebarIcons
        Icon={SearchIcon}
        text="Explore"
        active={activeOption === "Explore"}
        onClick={() => handleSetActive("Explore")}
      />
      <SidebarIcons
        Icon={NotificationsNoneIcon}
        text="Notifications"
        active={activeOption === "Notifications"}
        onClick={() => handleSetActive("Notifications")}
      />
      <SidebarIcons
        Icon={MailOutlineIcon}
        text="Message"
        active={activeOption === "Message"}
        onClick={() => handleSetActive("Message")}
      />
      <SidebarIcons
        Icon={BookmarkBorderIcon}
        text="Bookmarks"
        active={activeOption === "Bookmarks"}
        onClick={() => handleSetActive("Bookmarks")}
      />
      <SidebarIcons
        Icon={ListAltIcon}
        text="Lists"
        active={activeOption === "Lists"}
        onClick={() => handleSetActive("Lists")}
      />
      <SidebarIcons
        Icon={PermIdentityIcon}
        text="Profile"
        active={activeOption === "Profile"}
        onClick={() => handleSetActive("Profile")}
      />
      <SidebarIcons
        Icon={MoreHorizIcon}
        text="More"
        active={activeOption === "More"}
        onClick={() => handleSetActive("More")}
      />
      <Button className="sidebar__tweet" variant="outlined">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;

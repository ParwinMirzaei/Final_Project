import React from "react";
import "./SidebarIcons.css";

function SidebarIcons({ Icon, text, active, onClick }) {
  return (
    <div
      className={`sidebarIcons ${active ? "sidebarIcons--active" : ""}`}
      onClick={onClick}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarIcons;

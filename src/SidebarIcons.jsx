import React from 'react';
import "./SidebarIcons.css"
import "./App.css"

function SidebarIcons({active, text, Icon}) {
  return (
    <div className='sidebarIcons'>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarIcons;
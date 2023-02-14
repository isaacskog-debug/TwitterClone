import React from 'react';
import './SiderbarOption.css'

//i props->text icon läggs en icon and use es6
export default function SidebarOption({ active,text,Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  );
}



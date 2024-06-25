import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Sidebar.module.css';

//
console.log(s);

//
const Sidebar = () => {
  return (
    <nav className={s.nav}>
      {/* <div className={`${s.item} ${s.active}`}> */}
      <div className={s.item}>
        <NavLink to='/Profile' className={navData=>navData.isActive ? s.activeLink: s.item}>Profile</NavLink>
        {/* <NavLink to='/Profile'>Profile</NavLink> */}
      </div>
      <div className={s.item}>
        <NavLink to='/Dialogues' className={navData=>navData.isActive ?s.activeLink: s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/News'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Guests'>Guests</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Settings' className={navData=>navData.isActive ? s.activeLink: s.item}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;

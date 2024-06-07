import React from 'react';

// СТАРАЯ --- УЖЕ НЕ РАБОТАЮЩАЯ --- запись
// import classes from './../style_css/Sidebar.module.css'
import styles from './../style_css/Sidebar.module.css';

// import styles from '../styles_1_css/Sidebar.module.css';

const Sidebar = () => {
  return (
    // СТАРАЯ --- УЖЕ НЕ РАБОТАЮЩАЯ --- запись
    // <nav className="nav">
    <nav className={styles.nav}>
      {/* СТАРАЯ --- УЖЕ НЕ РАБОТАЮЩАЯ --- запись */}
      {/* <div className="item"> */}
      <div className={styles.item}>
        <a href='#'>Profile</a>
      </div>

      {/* <div className="item"> */}
      <div className={styles.item}>
        <a href='#'>Messages</a>
      </div>
      {/* <div className="item"> */}
      <div className={styles.item}>
        <a href='#'>News</a>
      </div>
      {/* <div className="item"> */}
      <div className={styles.item}>
        <a href='#'>Guests</a>
      </div>
      {/* <div className="item"> */}
      <div className={styles.item}>
        <a href='#'>Settings</a>
      </div>
    </nav>
  );
};

export default Sidebar;

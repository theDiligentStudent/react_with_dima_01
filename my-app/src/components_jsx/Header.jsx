import React from 'react';

// СТАРАЯ --- УЖЕ НЕ РАБОТАЮЩАЯ --- запись:
// import classes from './../style_css/Header.module.css'
import styles from './../style_css/Header.module.css'

import image_1 from './../images/project_1/image_1.jpg';

const Header = () => {
  return (

// СТАРАЯ --- УЖЕ НЕ РАБОТАЮЩАЯ --- запись
    // <header className="header">

    <header className={styles.header}>
      <div>
        <img src={image_1} />
      </div>
      {/* Hello */}
    </header>
  );
};

export default Header; 

import React from 'react';

import s from './Header.module.css';

import image_1 from './../../images/project_1/image_1.jpg';

//
console.log(s);

//

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img src={image_1} />
      </div>
    </header>
  );
};

export default Header;

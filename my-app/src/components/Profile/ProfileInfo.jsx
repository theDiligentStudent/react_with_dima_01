import React from 'react';
import s from './ProfileInfo.module.css';
import image_3 from './../../images/project_1/image_3.png';

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={image_3} />
      </div>
      <div>Ava and description</div>
    </div>
  );
};

export default ProfileInfo;

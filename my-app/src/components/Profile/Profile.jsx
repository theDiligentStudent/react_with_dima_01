import React from 'react';
import s from './Profile.module.css';
import image_3 from './../../images/project_1/image_3.png';

//
console.log(s);

//

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={image_3} />
      </div>
      <div>Ava and description</div>
      <div>
        My posts
        <div className={s.posts}>New posts</div>
      </div>
      <div>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;

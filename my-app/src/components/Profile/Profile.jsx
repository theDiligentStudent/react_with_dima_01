import React from 'react';
import MyPosts from './my_posts/MyPosts';
import s from './Profile.module.css';
import image_3 from './../../images/project_1/image_3.png';

//
console.log(s);

//

const Profile = () => {
  // debugger
  return (
    <div className={s.content}>
      <div>
        <img src={image_3} />
      </div>
      <div>Ava and description</div>
      <MyPosts greet='Hello!' />
      {/* <MyPosts  /> */}
    </div>
  );
};

export default Profile;

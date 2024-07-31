import React from 'react';
import MyPosts from './my_posts/MyPosts';
import s from './Profile.module.css';
// import image_3 from './../../images/project_1/image_3.png';
import ProfileInfo from './ProfileInfo';

//console.log(s);

//

const Profile = () => {
  return (
    <div >
    {/* <div className={s.content}> */}
      <ProfileInfo/>
      {/* <div>
        <img src={image_3} />
      </div>
      <div>Ava and description</div> */}
      <MyPosts hi='Hi, Friends!!' />
    </div>
  );
};

export default Profile;

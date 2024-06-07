import React from 'react';

    // СТАРАЯ --- УЖЕ НЕ РАБОТАЮЩАЯ --- запись
// import classes from './../style_css/Profile.module.css'
import styles from './../style_css/Profile.module.css'
import image_3 from './../images/project_1/image_3.png';


// Ком-у Content КОММЕНТИРУЮ ---- потому что МЕНЯЮ ЕЙ ИМЯ --- на Profile
// const Content = () => {
//   return (
//     <div className='content'>
//       <div>
//         <img src={image_3} />
//       </div>
//       <div>Ava and description</div>
//       <div>
//         My posts
//         <div>New posts</div>
//       </div>
//       <div>
//         <div>Post 1</div>
//         <div>Post 2</div>
//       </div>
//     </div>
//   );
// };

// export default Content;

const Profile = () => {
  return (
    // СТАРАЯ --- УЖЕ НЕ РАБОТАЮЩАЯ --- запись
    // <header className="content">

    <div className={styles.content}>
      <div>
        <img src={image_3} />
      </div>
      <div>Ava and description</div>
      <div>
        My posts
        <div>New posts</div>
      </div>
      <div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;

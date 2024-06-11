import React from 'react';
import s from './Post.module.css';
import img_4 from './../../../../images/project_1/image_4.jpg';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img className={s.image} src={img_4} />
        {/* <img src={img_4} /> */}
        {props.message}
        {/* Post 1 */}
      </div>
      <div className={s.like}>Like</div>
      <p></p>
    </div>
  );
};

export default Post;

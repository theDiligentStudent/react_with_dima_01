import React from 'react';
import s from './Post.module.css';
import img_4 from '../../../../images/project_1/image_4.jpg';

const Post = () => {
  return (
    <div className={s.item}>
      <img className={s.image} src={img_4} />
      {/* <img src={img_4} /> */}
      Post 1
    </div>
  );
};

export default Post;

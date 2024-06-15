import React from 'react';
import s from './Post.module.css';
import img_4 from './../../../../images/project_1/image_4.jpg';

const Post = (props) => {
  console.log(props);
  console.log(props.Like);
  // debugger
  return (
    <div className={s.item}>
      <div>
        <img className={s.image} src={img_4} />
        {props.text},{props.name}, {props.age}
      </div>
      <div>
        <span>Like
        {props.Like}
        </span>
      </div>
      <p></p>
    </div>
  );
};

export default Post;

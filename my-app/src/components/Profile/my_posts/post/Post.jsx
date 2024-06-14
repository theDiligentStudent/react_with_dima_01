import React from 'react';
import s from './Post.module.css';
import img_4 from './../../../../images/project_1/image_4.jpg';

const Post = (props) => {
  console.log(props);
  console.log(props.age);
  // debugger
  return (
    <div className={s.item}>
      <div>
        <img className={s.image} src={img_4} />
        {props.text}
      {props.name}, {props.age}
      </div>
      <span>
        Like
        {props.Like}
      </span>
      <p></p>
    </div>
  );
};

export default Post;

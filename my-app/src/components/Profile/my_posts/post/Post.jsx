import React from 'react';
import s from './Post.module.css';
import img_4 from './../../../../images/project_1/image_4.jpg';

const Post = (props) => {
// debugger
      console.log(props.message); 


  return (
    <div className={s.item}>
      <div>
        <img className={s.image} src={img_4} />
        {props.message}
        {props.name},{props.age}
        {props.gender}
      </div>
    {/* Дима использует ВМЕСТО div тег <span></span> */}
      {/* <div>
        Like!
        {props.Like}
      </div> */}
      <span>
         Like! 
        {props.Like}
      </span>
      <p></p>
    </div>
  );
};

export default Post;

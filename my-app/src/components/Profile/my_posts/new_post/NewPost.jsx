import React from 'react';
import s from './NewPost.module.css';

const NewPost = () => {
  return (
    <div>
      <div>
        <p></p>
     <input value={5}/>
     <input value='15'/>
        <p></p>
      </div>
      <div className={s.text}>Create New Post</div>
      <div>
        <textarea className={s.textar}></textarea>
      </div>
      <div>
        <button className={s.color_button_1}>Create Post</button>
        <button className={s.color_button_2}>Remove Post</button>
      </div>

      <div>
        <p></p>
      </div>
    </div>
  );
};

export default NewPost;

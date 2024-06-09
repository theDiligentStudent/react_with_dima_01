import React from 'react';
import MyPost from './My_post/myPost';
import s from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div className={s.posts}>New posts</div>
      </div>
      <div>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;

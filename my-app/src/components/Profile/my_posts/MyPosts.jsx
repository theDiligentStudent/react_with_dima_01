import React from 'react';
import NewPost from './new_post/NewPost.jsx';
import Post from './post/Post.jsx'
import s from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      <div><p></p></div>
      <div>
        <div>My Post</div>
      <NewPost/>
        <div className={s.posts}>New posts</div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      <div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;

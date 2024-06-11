import React from 'react';
import NewPost from './new_post/NewPost.jsx';
import Post from './post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      <div>
        <p></p>
      </div>
      <div>
        <div>My Posts</div>
        <NewPost />
        <p></p>
        <div className={s.posts}>My New posts:</div>
        <p></p>
        <Post message=' Hello, Friends!!' />
        <Post message=" It's me!" />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

      <div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;

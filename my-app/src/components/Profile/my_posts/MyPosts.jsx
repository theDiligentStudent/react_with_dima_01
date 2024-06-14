import React from 'react';
import NewPost from './new_post/NewPost.jsx';
import Post from './post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  // debugger
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
        <Post text=' Hello, Friends!!' Like=' 70' />
        <Post text=" It's me! - Your Friend - Important React!" Like=' 55' />
        <Post />
        <Post />
        <Post name=' Katya S. ' age=' 43 ' Like=' 50' />
      </div>

      <div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;

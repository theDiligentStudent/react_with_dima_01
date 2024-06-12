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
        {/* <Post {props.message = "I"}/> */}
        <Post message=' Hello, Friends!!' />
        <Post message=" It's me!" />
        <Post name=' Angel K.' age=' 30, ' gender=' female' />
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

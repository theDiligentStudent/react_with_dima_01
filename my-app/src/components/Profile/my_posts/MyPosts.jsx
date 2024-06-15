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
        {/* {props.greet} */}
        <div>My Posts</div>
        <NewPost />
        <p></p>
        <div className={s.posts}>My New posts:</div>
        <p></p>
        <Post text='Hi all!' Like=' 110' />
        <Post text='This is where I learn React' Like=' 95' />
        <Post />
        <Post />
        <Post name='Your Friend - React' age='10' Like=' 85'/>
      </div>

      <div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;

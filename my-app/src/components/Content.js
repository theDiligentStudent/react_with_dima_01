import React from 'react';
import image_3 from './../images/project_1/image_3.png';

const Content = () => {
  return (
    <div className='content'>
      <div>
        <img src={image_3} />
      </div>
      <div>Ava and description</div>
      <div>
        My posts
        <div>New posts</div>
      </div>
      <div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};

export default Content;

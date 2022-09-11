import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Post from './post.jsx'

const PostList = ({posts, title, remove}) => {

  if (!posts.length) {
    return (
      <div className='postEmpty'>Posts not found</div>
    )
  }
  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '15px'}}>{title}</h1> 
      <TransitionGroup className='post_wrapper'>
      {
        posts.map((posts, index) => 
        <CSSTransition 
        key = {posts.id}
        timeout={500}
        classNames="post">
        <Post remove = {remove} number= {index + 1} info = {posts}/>
        </CSSTransition>
        ) 
      }
      </TransitionGroup>
    </div>
  );
};

export default PostList;
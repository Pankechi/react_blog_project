import React from 'react';
import PostButton from './UI/button/PostButton';
import {useNavigate} from 'react-router-dom';

const Post = function(props) {
  const Router = useNavigate();

  return (
    <div className='post'>
      <div className='post__content'>
      <div className='post__id'>{props.info.id}</div>
      <strong>{props.info.title}</strong>
      <div>{props.info.body}</div>
      </div>
      <div className='post__buttons'>
      <div className='post__button'>
      <PostButton onClick = {() => Router(`/posts/${props.info.id}`)}>Open</PostButton>
      </div>  
      <div className='post__button'>
      <PostButton onClick = {() => props.remove(props.info)}>Delete</PostButton>
      </div>
      </div>    
    </div>
  )

}

export default Post
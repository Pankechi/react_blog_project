import React from 'react';
import classes from './PostInput.module.css';

const PostInput = ({...props}) => {
  return (
    <input className={classes.PostInp} {...props}>
    </input>
  );
};

export default PostInput;
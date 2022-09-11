import React from 'react';
import classes from './ModalPost.module.css'

const ModalPost = ({children, visible, setVisible}) => {

  const changeVisible = [classes.modalPost] 
  
  if(visible) {
    changeVisible.push(classes.modalPost__active)
  }

  return (
    <div className={changeVisible.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.modalPost__content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalPost;
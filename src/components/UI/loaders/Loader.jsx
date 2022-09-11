import React from 'react';
import classes from './Loader.module.css'

const Loader = () => {
  return (
    <div className={classes.loader__wrap}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
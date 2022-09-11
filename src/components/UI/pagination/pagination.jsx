import React from 'react';
import { getPagesArray } from '../../../utilitis/pages';

const Pagination = ({totalPage, page, changePage}) => {

  let pageArray = getPagesArray(totalPage);

  return (
    <div className='pages__button-list'>
    {pageArray.map(p =>
      <span 
      onClick={() => changePage(p)}
      key={p} 
      className={p === page ? 'pages__buttons-active pages__buttons': 'pages__buttons'}>{p}</span>)}
      </div> 
  );
};

export default Pagination;
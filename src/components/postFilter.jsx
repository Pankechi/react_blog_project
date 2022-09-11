import React from 'react';
import PostInput from './UI/input/PostInput';
import PostSelect from './UI/select/postSelect';
import cl from '../style/PostFilter.module.css'

const PostFilter = ({filter, SetFilter}) => {
  return (
    <div className={cl.PostFilter__wrapper}>
       <PostInput 
       on
        placeholder = "Search..."
        value = {filter.search}
        onChange = {e => SetFilter({...filter, search: e.target.value})}
        />
        <PostSelect 
        value={filter.sort}
        onChange = {e => SetFilter({...filter, sort: e})}
        defaultValue = "Sort by:" 
        options = {[
          {value: "title", text: "Title"},
          {value: "body", text: "Description"},
          ]} 
          />
    </div>
  );
};

export default PostFilter;
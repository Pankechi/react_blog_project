import React, {useState} from 'react';
import PostInput from './UI/input/PostInput';
import PostButton from './UI/button/PostButton';


const PostForm = ({create}) => {
  const [post, setPost] = useState({title: ' ', text: ' '});

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post, id: Date.now()
    }
    
    create(newPost)
    setPost({title: ' ', text: ' '})
  
   };

  return (
      <form>
      <PostInput type ="text" placeholder = "Post name" value = {post.title} onChange ={e => setPost({...post, title: e.target.value})}></PostInput>
      <PostInput  type = 'text' placeholder= 'Post text' value = {post.text} onChange ={e => setPost({...post, text: e.target.value})} />
      <PostButton onClick= {addNewPost}>Post</PostButton>
      </form>   
  );
};

export default PostForm;
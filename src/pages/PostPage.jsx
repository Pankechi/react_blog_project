import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loaders/Loader';
import { useFetching } from '../customHooks/useFetching';
import cl from './style/PostPage.module.css' 

const PostPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([])

  const [fetchPosts, PostLoading, PostErorr] = useFetching(async () => {
    const  response = await PostService.getPostById(params.id)
    setPost(response.data)
   })

   const [fetchComments, CommentsLoading, CommentsErorr] = useFetching(async () => {
    const  response = await PostService.getPostComments(params.id)
    setComments(response.data)
   })

  useEffect(() => 
  {fetchPosts()
  fetchComments()}, [])

  return (
    <div>
      <h1> Post #{params.id} </h1>
      {
        PostLoading ?
        <Loader></Loader> :
        <div>{post.title}</div>

      }
      <h1 className={cl.comments__header}>Comments</h1>
      {
        CommentsLoading ?
        <Loader></Loader> :
        <div className={cl.comments}>
          {comments.map(comment => 
            <div className={cl.comment}>
            <div className={cl.comment__email}>{comment.email}</div>
            <div className={cl.comment__text}>{comment.body}</div>
            </div>
          )}
        </div>

      }
    </div>
  );
};

export default PostPage;
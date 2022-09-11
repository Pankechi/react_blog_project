import React, {useState, useEffect} from 'react';
import PostList from '../components/postlist.jsx';
import '../style/style.css'
import PostForm from '../components/postform.jsx';
import PostFilter from '../components/postFilter.jsx';
import ModalPost from '../components/modal/ModalPost.jsx';
import PostButton from '../components/UI/button/PostButton.jsx';
import { usePosts } from '../customHooks/usePost.jsx';
import PostService from '../API/PostService.js'
import Loader from '../components/UI/loaders/Loader.jsx';
import { useFetching } from '../customHooks/useFetching.jsx';
import { getPageCount, getPagesArray } from '../utilitis/pages.js';
import Pagination from '../components/UI/pagination/pagination.jsx';

function Posts() {
 const [posts, postsState] = useState([]);
 const [limit, setLimit] = useState(10);
 const [page, setPage] = useState(1);
 const [totalPage, setTotalPage] = useState(0)

 const [fetchPosts, PostLoading, PostErorr] = useFetching(async () => {
  const  response = await PostService.getAll(limit, page)
  postsState(response.data)
  const totalCount = response.headers['x-total-count'];
  setTotalPage(getPageCount(totalCount, limit))
  console.log(totalPage, totalCount)
 })

 let pageArray = getPagesArray(totalPage);

 const [totalCount, setTotalCount] = useState(0)


useEffect(() => {fetchPosts()}, [page])

const [filter, SetFiler] = useState({sort: '', search: ''})

const [modal, setModal] = useState(false)

const searchPosts = usePosts(posts, filter.sort, filter.search)
   

 const createPost = (newPost) => {
  postsState([...posts, newPost])
  setModal(false)
 };

 const removePost = (post) => {
  postsState(posts.filter(p => p.id !== post.id))
 }

 const changePage = page => {
  setPage(page)
 }

  return (
    <div className="App">
      <PostButton onClick = {() => setModal(true)}>Create post</PostButton>
      <ModalPost visible={modal} setVisible={setModal}>
      <PostForm create = {createPost}/>
      </ModalPost>
      <PostFilter 
      filter={filter}
      SetFilter={SetFiler}
      />
      { PostLoading ?
        <Loader></Loader>
      :
        <PostList remove = {removePost} posts={searchPosts} title = 'Post List' /> }
        <Pagination totalPage={totalPage} page={page} changePage={changePage}></Pagination>
  
    </div>
  );
}


export default Posts;
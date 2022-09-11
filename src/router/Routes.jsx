import About from "../pages/about";
import PostPage from "../pages/PostPage";
import Posts from "../pages/posts";
import React from "react";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export const PrivateRouts = [
  {path: '/about', element: <About/>, exact: true },
  {path: '/posts', element: <Posts/>, exact: true },
  {path: '/posts/:id', element: <PostPage/>, exact: true},
]

export const PublicRouts = [
  {path: '/login', element: <Login/>, exact: true },
]
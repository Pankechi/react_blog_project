import React from 'react';
import { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { AuthContext } from '../context/context.js';
import About from '../pages/about.jsx';
import Login from '../pages/Login.jsx';
import PostPage from '../pages/PostPage.jsx';
import Posts from '../pages/posts.jsx';
import { PublicRouts, PrivateRouts } from '../router/Routes.jsx';

const AppRouter = () => {

  const {authorized, setAuthorized} = useContext(AuthContext);


  return (

    authorized ?

    <Routes>
    {
      PrivateRouts.map(route =>
      <Route path={route.path} element={route.element} exact={route.exact} />
      )
    }
    <Route path="/*" element={<Navigate to="/posts" />}></Route>
    </Routes> :

    <Routes> 
    {
      PublicRouts.map(route =>
      <Route path={route.path} element={route.element} exact={route.exact} />
      )
    }
     <Route path="/*" element={<Navigate to="/login" />}></Route>
    </Routes>
    
  );
};

export default AppRouter;
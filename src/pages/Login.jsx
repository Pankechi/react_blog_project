import React from 'react';
import PostButton from '../components/UI/button/PostButton';
import PostInput from '../components/UI/input/PostInput';
import { useContext } from 'react';
import { AuthContext } from '../context/context';

const Login = () => {

  const {authorized, setAuthorized} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setAuthorized(true);
    localStorage.setItem('authorized', "true")
  }
  return (
    <div>
      <h1>Please LogIn</h1>
      <form onSubmit={login}>
        <PostInput type='text' placeholder='Login'></PostInput>
        <PostInput type='password' placeholder='Password'></PostInput>
        <PostButton>LogIn</PostButton>
      </form>
    </div>
  );
};

export default Login;
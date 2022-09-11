import React from 'react';
import {Link} from 'react-router-dom'
import PostButton from '../button/PostButton';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';

const Navbar = () => {
  const {authorized, setAuthorized} = useContext(AuthContext);

  const logout = event => {
    event.preventDefault();
    setAuthorized(false);
    localStorage.removeItem('authorized')
  }

  return (
    <div className='navbar'>
    <div className='navbar__items'>
      <Link to='/about'>About</Link>
      <Link to='/posts'>Posts</Link>
    </div>
    <PostButton onClick={logout}>LogOut</PostButton>
    </div>
  );
};

export default Navbar;
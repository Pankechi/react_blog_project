import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AppRouter from './components/AppRouter.jsx';
import Navbar from './components/UI/navbar/navbar.jsx';
import { AuthContext } from './context/context.js';
import './style/style.css'


function App() {

  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('authorized')) {
      setAuthorized(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{authorized, setAuthorized}}>
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
    </AuthContext.Provider>

  );
}

export default App;

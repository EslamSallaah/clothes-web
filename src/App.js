import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import AppRouter from './AppRouter';

function App() {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}

export default App

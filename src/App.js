import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Products from './Products';
import React from 'react';
import Product from './Product';
import {BrowserRouter , Route , Router, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Store from './redux/Store';
import Handlecart from './redux/action/reducer/Handlecart';
function App() {
  return (
    


<>

<NavBar />
<Home />

  <Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/products/:id" element={<Product />} />
<Route path="/about" element={<h1>About</h1>} />
<Route path="/contact" element={<h1>Contact</h1>} />
<Route path='./Login.jsx' element={<h1>Login</h1>} />
<Route path='./Register.jsx' element={<h1>Register</h1>} />
<Route path='./redux/action/reducer/Handlecart.js' element={<h1>Cart</h1>} />
<Route path="/products/:id" element={<Product />} />
</Routes>











</>
  );
}

export default App

import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Products from './Products';
import React from 'react';
import Product from './Product';
import {Switch , Route , Router} from 'react-router-dom';

function App() {
  return (
<>
<NavBar />
<Home />
{/* <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/products" component={Products} />
  <Route exact path="/product/:id" component={Product} />
  <Route exact path="/about" component={() => <h1>About</h1>} />

  <Route component={() => <h1>404 Not Found</h1>} />

</Switch> */}
    </>
  );
}

export default App

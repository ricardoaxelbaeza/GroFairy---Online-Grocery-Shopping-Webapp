import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import 'antd/dist/antd.css'; 
import GroceryStores from './components/pages/GroceryStores';
import GroceryProducts from './components/pages/GroceryProducts';
import SignUp from './components/pages/SignUp';
import ShoppingCart from './components/pages/ShoppingCart';
import SignIn from "./components/pages/SignIn"



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/grocerystores' exact component={GroceryStores} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/groceryproducts' exact component={GroceryProducts} />
          <Route path='/shoppingcart' exact component={ShoppingCart} />
          <Route path='/signin' exact component={SignIn} />
        </Switch>
      </Router>
    </>
  )
}

export default App;

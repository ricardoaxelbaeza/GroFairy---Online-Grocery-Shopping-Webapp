import react from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import 'antd/dist/antd.css'; 
import GroceryStores from './components/GroceryStores';



function App() {
  return (
    <>
      <Router>
       <Navbar/>
        <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/grocerystores' exact component={GroceryStores}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

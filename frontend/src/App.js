import { React, Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavbarInitial from './components/NavbarInitial';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import 'antd/dist/antd.css'; 
import GroceryStores from './components/pages/GroceryStores';
import GroceryProducts from './components/pages/GroceryProducts';
import SignUp from './components/pages/SignUp';
import ShoppingCart from './components/pages/ShoppingCart';
import SignIn from "./components/pages/SignIn"
import { connect } from 'react-redux'
import * as actions from './components/pages/actions/auth'
import Checkout from './components/pages/Checkout'



class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <>
        <Router>
          <NavbarInitial {...this.props}/>
          <Switch>
            <Route path='/' exact component={Home} {...this.props}/>
            <Route path='/grocerystores' exact component={GroceryStores} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/groceryproducts' exact component={GroceryProducts} />
            <Route path='/shoppingcart' exact component={ShoppingCart}/>
            <Route path='/signin' exact component={SignIn} />
            <Route path='/checkout' exact component={Checkout} />
          </Switch>
        </Router>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    username: state.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import '../../App.css'
// import HeroSection from '../HeroSection'
import "./ShoppingCart.css";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom'
// import Product from "../Product.js";


const ShoppingCart = () => {
    return (
        <div className="shoppingcart" style={{ marginTop: '11vh' }}>
            <div className="shoppingcart_left">
                <h2>Shopping cart</h2>

                <CartItem />
            </div>
            <div className="shoppingcart_right">
                <div className="shoppingcart_info">
                    <p>Subtotal (4) items</p>
                    <p>$27.18</p>
                </div>
                <div>
                    <button>
                        <Link to='/checkout' style={{color: 'white'}}>
                            Proceed To Checkout
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ShoppingCart;
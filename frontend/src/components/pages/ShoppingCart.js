import '../../App.css'
// import HeroSection from '../HeroSection'
import "./ShoppingCart.css";
import CartItem from "./CartItem";
// import Product from "../Product.js";


const ShoppingCart = () => {
    return (
        <div className="shoppingcart" style={{marginTop: '11vh'}}>
            <div className="shoppingcart_left">
                <h2>Shopping cart</h2>

                <CartItem />
            </div>
            <div className="shoppingcart_right">
                <div className="shoppingcart_info">
                    <p>Subtotal (0) items</p>
                    <p>$ </p>
                </div>
                <div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};


export default ShoppingCart;
import './CartItem.css';
import {Link} from 'react-router-dom';

const CartItem = () => {
    return (
        <div className ="cartitem">
            <div className = "cartitem_image">
                <img src = "" alt = "product name" />
            </div>
            
            <Link to ={`/product/${111}`} className="cartitem_name">
                <p>Product 1</p>
            </Link>

            <p className="cartitem_price">$</p>
            
            <select className = "cartname_select">
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
            </select>

            <button className ="cartitem_deleteButton">
                <i className ="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem

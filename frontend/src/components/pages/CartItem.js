import './CartItem.css';
import {Link} from 'react-router-dom';

const CartItem = () => {
    return (
        <div className ="cartitem">
            <div className = "cartitem_image">
                <img src = "https://images-na.ssl-images-amazon.com/images/I/81VHlJkvf6L._SL1500_.jpg" alt = "product name" />
            </div>            
            <Link to ={`/product/${8}`} className="cartitem_name">
                <p>Pasta - Orecchiette</p>
            </Link>

            <p className="cartitem_price">$2.32</p>
            
            
            {/*<select className = "cartname_select">
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
            </select>
    */}
            <button className ="cartitem_deleteButton">
                <i className ="fas fa-trash"></i>
            </button>
            <div className = "cartitem_image">
                <img src = "https://www.kroger.com/product/images/xlarge/front/0073951040000" alt = "product name" />
            </div>            
            <Link to ={`/product/${8}`} className="cartitem_name">
                <p>Sobe - Orange Carrot</p>
            </Link>

            <p className="cartitem_price">$12.59</p>
            
            
            {/*<select className = "cartname_select">
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
            </select>
    */}
            <button className ="cartitem_deleteButton">
                <i className ="fas fa-trash"></i>
            </button>
            <div className = "cartitem_image">
                <img src = "https://media.istockphoto.com/photos/sandwich-catering-platter-picture-id140463189" alt = "product name" />
            </div>            
            <Link to ={`/product/${8}`} className="cartitem_name">
                <p>Longos - Assorted Sandwich</p>
            </Link>

            <p className="cartitem_price">$9.05</p>
            
            
            {/*<select className = "cartname_select">
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
            </select>
    */}
            <button className ="cartitem_deleteButton">
                <i className ="fas fa-trash"></i>
            </button>
            <div className = "cartitem_image">
                <img src = "https://catalog.nationalew.com/images/prdimgs/ECO/450/ECO6101131.JPG" alt = "product name" />
            </div>            
            <Link to ={`/product/${8}`} className="cartitem_name">
                <p>Ecolab - Lime - A - Way 4/4 L</p>
            </Link>

            <p className="cartitem_price">$3.22</p>
            
            
            {/*<select className = "cartname_select">
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
            </select>
    */}
            <button className ="cartitem_deleteButton">
                <i className ="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem

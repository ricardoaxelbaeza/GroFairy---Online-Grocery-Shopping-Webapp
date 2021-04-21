import * as actionTypes from '../constants/CartConstants';
// import axios from 'axios';

/*export const AddToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`product.id`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data.product_id,
            name: data.product_name,
            image: data.product_image,
            price: data.unit_price,
            stock: data.stock,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart))
};

export const RemoveFromCart = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.CartItems));
};
*/
import * as actionTypes from '../constants/CartConstants';

export const CartReducer = (state = { CartItems: [] }, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.CartItems.find((x) => x.product === item.product);

            if(existItem) {
                return {
                    ...state,
                    CartItems: state.CartItems.map((x) => x.product === existItem.product ? item : x),    
                }
            } else {
                return {
                    ...state,
                    CartItems: [...state.CartItems, item],
                };
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                CartItems: [...state.CartItems, item],
            };
        default:
            return state;
    }
};
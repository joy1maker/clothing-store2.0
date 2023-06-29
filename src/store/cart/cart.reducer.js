import { CART_ACTION_TYPES } from "./cart.types";
const INTITAL_CART_STATE = {
    isCartOpen: false,
    cartItems: [],

}

export const CartReducer = (state = INTITAL_CART_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state
    }
}
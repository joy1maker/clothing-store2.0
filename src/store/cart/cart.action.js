import { CART_ACTION_TYPES } from "./cart.types";

export const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const removeCartItem = (cartItems, productToAdd) => {
    const newItemList = cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );


    return newItemList.filter((cartItem) => cartItem.quantity > 0)
};
export const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
}
export const setIsCartOpen = (bool) => {
    return { payload: bool, type: CART_ACTION_TYPES.TOGGLE_CART_OPEN }
}

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addCartItem(cartItems, product);
    return { payload: newCartItems, type: CART_ACTION_TYPES.SET_CART_ITEMS }
}
export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeCartItem(cartItems, product);
    return { payload: newCartItems, type: CART_ACTION_TYPES.SET_CART_ITEMS }
}

export const deleteItemfromCart = (cartItems, product) => {
    const newCartItems = deleteCartItem(cartItems, product);
    return { payload: newCartItems, type: CART_ACTION_TYPES.SET_CART_ITEMS }
}
import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems
)
export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)
export const selectTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce(
            (total, cartItem) => total + (cartItem.quantity * cartItem.price), 0
        );
    }
)
export const selectCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
    }
)


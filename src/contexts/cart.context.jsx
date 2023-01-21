import { createContext, useState, useEffect } from 'react';

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


export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartItemCount: 0,
    cartItemTotal: 0,
    removeItemFromCart: () => { },
    deleteItemfromCart: () => { },


});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartItemTotal, setCartItemTotal] = useState(0);


    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemCount(count);
    }, [cartItems]);
    useEffect(() => {
        const total = cartItems.reduce(
            (total, cartItem) => total + (cartItem.quantity * cartItem.price), 0
        );
        setCartItemTotal(total);
    }
        , [cartItems])

    const addItemToCart = (product) =>
        setCartItems(addCartItem(cartItems, product));
    const removeItemFromCart = (product) =>
        setCartItems(removeCartItem(cartItems, product))

    const deleteItemfromCart = (product) => {
        setCartItems(deleteCartItem(cartItems, product))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartItemCount,
        cartItemTotal,
        removeItemFromCart,
        deleteItemfromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
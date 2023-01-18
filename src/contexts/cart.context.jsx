// eslint-disable-next-line
import { createContext, useState, useEffect } from "react";
const default_values = {
    toogleCart: false,
}

export const CartContext = createContext(default_values)

export const CartProvider = ({ children }) => {
    // eslint-disable-next-line
    const [cart, setCart] = useState(default_values);
    const value = { cart, setCart }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
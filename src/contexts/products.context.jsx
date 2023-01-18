// eslint-disable-next-line
import { createContext, useState, useEffect } from "react";
import { shop_data } from "../assets/shop-data";
export const ProductsContext = createContext({
    products: []
})

export const ProductsProvider = ({ children }) => {
    // eslint-disable-next-line
    const [products, setProducts] = useState(shop_data);
    const value = { products }
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
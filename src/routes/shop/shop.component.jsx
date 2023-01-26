// import { ProductsContainer } from "./shop.styles"
import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../catigores-preview/categories-preview.component"
import Catigory from "../catigory/catigory.component"
const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Catigory />} />
        </Routes>
    )
}

export default Shop;
// import { ProductsContainer } from "./shop.styles"
import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../catigores-preview/categories-preview.component"
import Catigory from "../catigory/catigory.component"
import { fetchcatigoresAsync } from "../../store/categories/category.action"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchcatigoresAsync());
        // eslint-disable-next-line
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Catigory />} />
        </Routes>
    )
}

export default Shop;
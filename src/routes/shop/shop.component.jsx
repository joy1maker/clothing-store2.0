// import { ProductsContainer } from "./shop.styles"
import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../catigores-preview/categories-preview.component"
import Catigory from "../catigory/catigory.component"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { setcatigores } from "../../store/categories/category.action"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const catigoreArray = await getCategoriesAndDocuments();
            console.log("cat array", catigoreArray)
            dispatch(setcatigores(catigoreArray));
        }
        getCategoriesMap();
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
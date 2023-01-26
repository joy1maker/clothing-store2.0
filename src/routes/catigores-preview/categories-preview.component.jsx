import React, { useContext } from "react";
import { CatigoresContext } from "../../contexts/catigores.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview = () => {

    const { catigoresMap } = useContext(CatigoresContext)
    return (
        <>
            {
                Object.keys(catigoresMap).map((title) => {
                    const products = catigoresMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </>
    )
}

export default CategoriesPreview;
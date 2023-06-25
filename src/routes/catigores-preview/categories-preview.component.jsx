import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCatigoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {


    const catigoresMap = useSelector(selectCatigoriesMap)
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
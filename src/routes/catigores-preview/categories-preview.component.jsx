import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesIsLoading, selectCatigoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
const CategoriesPreview = () => {


    const catigoresMap = useSelector(selectCatigoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <>
            {
                isLoading ?
                    <Spinner />
                    :
                    Object.keys(catigoresMap).map((title) => {
                        const products = catigoresMap[title];
                        return <CategoryPreview key={title} title={title} products={products} />
                    })
            }
        </>
    )
}

export default CategoriesPreview;
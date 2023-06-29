import { CategoryContainer, CategoryTitle } from "./catigory.styles"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCatigoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";
const Catigory = () => {
    const { category } = useParams();
    const catigoresMap = useSelector(selectCatigoriesMap)
    const [products, setProducts] = useState([]);
    const isLoading = useSelector(selectCategoriesIsLoading);
    useEffect(() => {
        setProducts(catigoresMap[category]);
    }
        , [category, catigoresMap])


    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ?
                    <Spinner />
                    :
                    <CategoryContainer>

                        {
                            products && products.map((product) => <ProductCard key={product.id} product={product} />)
                        }
                    </CategoryContainer>
            }

        </>
    )
}
export default Catigory;
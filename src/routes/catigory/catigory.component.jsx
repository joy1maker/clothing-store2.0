import { CategoryContainer, CategoryTitle } from "./catigory.styles"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCatigoriesMap } from "../../store/categories/category.selector";
const Catigory = () => {
    const { category } = useParams();
    const catigoresMap = useSelector(selectCatigoriesMap)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(catigoresMap[category]);
    }
        , [category, catigoresMap])
    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>

                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>

        </>
    )
}
export default Catigory;
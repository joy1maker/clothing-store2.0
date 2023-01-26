import { CategoryContainer, CategoryTitle } from "./catigory.styles"
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CatigoresContext } from "../../contexts/catigores.context";
import ProductCard from "../../components/product-card/product-card.component";
const Catigory = () => {
    const { category } = useParams();
    const { catigoresMap } = useContext(CatigoresContext);
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
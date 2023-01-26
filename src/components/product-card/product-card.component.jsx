import { Footer, Name, Price, ProductCartContainer } from "./product-card.styles"
import Button from "../button/button.component"

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
    const { price, name, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={'inverted'} onClick={addProductToCart}>Add to cart</Button>
        </ProductCartContainer>
    )
}
export default ProductCard
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from "./checkout-item.styles"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CheckOutItem = ({ item }) => {
    const { name, quantity, price, imageUrl } = item;
    const { addItemToCart, removeItemFromCart, deleteItemfromCart } = useContext(CartContext);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={() => removeItemFromCart(item)}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItemToCart(item)}>&#10095;</Arrow >
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={() => deleteItemfromCart(item)}>&#10005;</RemoveButton >
        </CheckoutItemContainer>
    )
}
export default CheckOutItem;
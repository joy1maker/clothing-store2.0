import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from "./checkout-item.styles"
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart, removeItemFromCart, deleteItemfromCart } from '../../store/cart/cart.action'
const CheckOutItem = ({ item }) => {
    const dispatch = useDispatch();
    const { name, quantity, price, imageUrl } = item;
    const cartItems = useSelector(selectCartItems);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={() => dispatch(removeItemFromCart(cartItems, item))}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => dispatch(addItemToCart(cartItems, item))}>&#10095;</Arrow >
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={() => dispatch(deleteItemfromCart(cartItems, item))}>&#10005;</RemoveButton >
        </CheckoutItemContainer>
    )
}
export default CheckOutItem;
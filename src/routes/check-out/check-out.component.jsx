import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./check-out.styles"
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartItems, selectTotal } from "../../store/cart/cart.selector";
const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const cartItemTotal = useSelector(selectTotal);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>product</HeaderBlock>
                <HeaderBlock>descrption</HeaderBlock>
                <HeaderBlock>quantity</HeaderBlock>
                <HeaderBlock>price</HeaderBlock>
                <HeaderBlock>remove</HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem, idx) => <CheckOutItem key={idx} item={cartItem} />)}
            <Total>Total : {cartItemTotal}</Total>
        </CheckoutContainer>
    )
}
export default CheckOut;
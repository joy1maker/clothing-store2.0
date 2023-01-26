import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./check-out.styles"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
const CheckOut = () => {
    const { cartItems, cartItemTotal } = useContext(CartContext);
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
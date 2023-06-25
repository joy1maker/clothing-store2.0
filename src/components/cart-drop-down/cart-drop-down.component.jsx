import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-drop-down.styles"
import Button from "../button/button.component"
import { useNavigate } from "react-router-dom"
import CartItem from "../cart-item/cart-item.component"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();
    const handleGoToCheckout = () => {
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />

                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={handleGoToCheckout}>go to check out</Button>
        </CartDropdownContainer>
    )

}

export default CartDropdown;
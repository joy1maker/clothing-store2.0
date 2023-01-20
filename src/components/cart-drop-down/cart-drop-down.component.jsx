import "./cart-drop-down.styles.scss"

import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import Button from "../button/button.component"
import CartItem from "../../cart-item/cart-item.component"
import { Link } from "react-router-dom"
const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button><Link>go to check out</Link></Button>
        </div>
    )

}

export default CartDropdown;
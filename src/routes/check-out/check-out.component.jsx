import "./check-out.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
const CheckOut = () => {
    const { cartItems, cartItemTotal } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">product</div>
                <div className="header-block">descrption</div>
                <div className="header-block">quantity</div>
                <div className="header-block">price</div>
                <div className="header-block">remove</div>
            </div>
            {cartItems.map((cartItem, idx) => <CheckOutItem key={idx} item={cartItem} />)}
            <div className="total">Total : {cartItemTotal}</div>
        </div>
    )
}
export default CheckOut;
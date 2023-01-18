import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = ({ onClick }) => {
    const { cart, setCart } = useContext(CartContext);
    return (
        <div className="cart-icon-container" onClick={() => { setCart({ ...cart, toggleCart: !cart.toggleCart }) }}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">10</span>
        </div>

    );
}
export default CartIcon;
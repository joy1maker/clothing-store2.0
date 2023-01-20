import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = ({ onClick }) => {
    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
    const changeIsOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className="cart-icon-container" onClick={changeIsOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItemCount}</span>
        </div>

    );
}
export default CartIcon;
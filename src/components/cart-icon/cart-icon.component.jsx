import { CartIconContainer, ItemCount } from "./cart-icon.styles"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = ({ onClick }) => {
    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
    const changeIsOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartIconContainer onClick={changeIsOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>

    );
}
export default CartIcon;
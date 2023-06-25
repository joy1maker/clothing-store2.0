import { CartIconContainer, ItemCount } from "./cart-icon.styles"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen, selectCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
const CartIcon = ({ onClick }) => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItemCount = useSelector(selectCount);


    const changeIsOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }
    return (
        <CartIconContainer onClick={changeIsOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>

    );
}
export default CartIcon;
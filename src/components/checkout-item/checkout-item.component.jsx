import "./checkout-item.styles.scss"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CheckOutItem = ({ item }) => {
    const { name, quantity, price, imageUrl } = item;
    const { addItemToCart, removeItemFromCart, deleteItemfromCart } = useContext(CartContext);
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <span className="arrow" onClick={() => removeItemFromCart(item)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => addItemToCart(item)}>&#10095;</span>
            </div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={() => deleteItemfromCart(item)}>&#10005;</div>
        </div>
    )
}
export default CheckOutItem;
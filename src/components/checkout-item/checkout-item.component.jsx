import "./checkout-item.styles.scss"


const CheckOutItem = (item) => {
    const { name, quantity, price, imageUrl } = item;
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="name">{name}</div>
            <div className="price">{price}</div>
            <div className="quantity">
                <span className="arrow"></span>
                <span className="value">{quantity}</span>
                <span className="arrow"></span>
            </div>
            <div className="remove-button"></div>
        </div>
    )
}
export default CheckOutItem;
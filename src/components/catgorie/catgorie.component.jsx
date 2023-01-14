import React from "react";
import "./catgorie.styles.scss"


const CatigoreItem = ({ catigore }) => {
    const { title, imageUrl } = catigore;
    console.log(catigore);
    return (
        <div className="category-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>shop now</p>
            </div>
        </div>
    )
}

export default CatigoreItem;
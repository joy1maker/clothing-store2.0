import React from "react";
import catgories from "../../assets/catgories";
import "./catgories.styles.scss"
import CatigoreItem from "../catgorie/catgorie.component";
const CatigoresContainer = () => {

    return (
        <div className="categories-container">
            {catgories.map((catigore) => (<CatigoreItem key={catigore.id} catigore={catigore} />))}
        </div>
    )
}

export default CatigoresContainer;
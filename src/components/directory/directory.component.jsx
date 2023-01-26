import React from "react";
import catgories from "../../assets/catgories";
import { DirectoryContainer } from "./directory.styles"
import DirectoryItem from "../directory-item/directory-item.component";
const Directory = () => {

    return (
        <DirectoryContainer>
            {catgories.map((catigore) => { return (<DirectoryItem key={catigore.id} catigore={catigore} />) })}
        </DirectoryContainer>
    )
}

export default Directory;
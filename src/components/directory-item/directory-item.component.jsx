import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx"


const DirectoryItem = ({ catigore }) => {
    const { title, imageUrl } = catigore;
    const nav = useNavigate();
    const onNavigateHandler = () => {
        nav(`shop/${title.toLowerCase()}`)
    }
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;
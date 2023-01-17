import React from "react";
import { Outlet } from "react-router-dom";
import CatigoresContainer from "../../components/catgories-container/catgories.component"

const HomePage = () => {
    return (
        <React.Fragment>
            <CatigoresContainer />
            <Outlet />
        </React.Fragment>
    )
}
export default HomePage;
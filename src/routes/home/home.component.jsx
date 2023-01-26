import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component"

const HomePage = () => {
    return (
        <React.Fragment>
            <Directory />
            <Outlet />
        </React.Fragment>
    )
}
export default HomePage;
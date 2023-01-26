// eslint-disable-next-line
import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CatigoresContext = createContext({
    catigoresMap: {}
})

export const CatigoresProvider = ({ children }) => {
    // eslint-disable-next-line
    const [catigoresMap, setcatigoresMap] = useState({});
    useEffect(() => {
        const getCategoriesMap = async () => {
            const catigoreMap = await getCategoriesAndDocuments();
            setcatigoresMap(catigoreMap);
        }
        getCategoriesMap();
    }, []);

    const value = { catigoresMap }
    return <CatigoresContext.Provider value={value}>{children}</CatigoresContext.Provider>
}
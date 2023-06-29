import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATIGORIES_ACTION_TYPES } from "./category.types"



export const fetchcatigoresStart = () => {
    return { type: CATIGORIES_ACTION_TYPES.FETCH_CATEGORIES_START };
}
export const fetchcatigoresSuccess = (categoryMap) => {
    return { type: CATIGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCSSES, payload: categoryMap };
}
export const fetchcatigoresFailed = (err) => {
    return { type: CATIGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, payload: err };
}
export const fetchcatigoresAsync = () => async (dispatch) => {
    dispatch(fetchcatigoresStart());
    try {
        const catigoreArray = await getCategoriesAndDocuments();
        dispatch(fetchcatigoresSuccess(catigoreArray));
    }
    catch (error) {
        dispatch(fetchcatigoresFailed())
    }
}
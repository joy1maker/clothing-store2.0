import { CATIGORIES_ACTION_TYPES } from "./category.types";

export const CATIGORIES_INITAL_STATE = {
    catigores: [],
    isLoading: false,
    error: null,

}
export const catigoresReducer = (state = CATIGORIES_INITAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATIGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            }
        case CATIGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCSSES:
            return {
                ...state,
                catigores: payload,
                isLoading: false
            };
        case CATIGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        default:
            return state;
    }
}

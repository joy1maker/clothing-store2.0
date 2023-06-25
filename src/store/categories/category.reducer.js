import { CATIGORIES_ACTION_TYPES } from "./category.types";

export const CATIGORIES_INITAL_STATE = {
    catigores: []
}
export const catigoresReducer = (state = CATIGORIES_INITAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATIGORIES_ACTION_TYPES.SET_CATIGORIES:
            return {
                ...state,
                catigores: payload
            };
        default:
            return state;
    }
}

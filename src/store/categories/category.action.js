import { CATIGORIES_ACTION_TYPES } from "./category.types"


export const setcatigores = (catigoreMap) => {
    return { payload: catigoreMap, type: CATIGORIES_ACTION_TYPES.SET_CATIGORIES }
}


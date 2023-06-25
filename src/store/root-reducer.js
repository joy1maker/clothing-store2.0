import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { catigoresReducer } from "./categories/category.reducer";
import { CartReducer } from "./cart/cart.reducer";
export const rootReducer = combineReducers({
    user: userReducer,
    catigores: catigoresReducer,
    cart: CartReducer
});
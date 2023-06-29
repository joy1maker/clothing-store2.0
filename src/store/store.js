import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const presistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart"]
}
const presistedReducer = persistReducer(presistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);
// const middleWares = [thunk].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__) || compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares))
export const store = createStore(presistedReducer, undefined, composeEnhancers);
export const presistor = persistStore(store); 
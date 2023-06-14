import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as creditCardReducer } from "./CardPageReducer/reducer";


const rootReducer=combineReducers({
    creditCardReducer,
});

export const store =legacy_createStore(rootReducer,applyMiddleware(thunk));
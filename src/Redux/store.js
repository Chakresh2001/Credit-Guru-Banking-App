import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as creditCardReducer } from "./CardPageReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as signupReducer } from "./SiginUpReducer/reducer"


const rootReducer=combineReducers({
    creditCardReducer,
    authReducer,
    signupReducer,
});

export const store =legacy_createStore(rootReducer,applyMiddleware(thunk));
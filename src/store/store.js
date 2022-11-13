import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./MainAuth/AuthReducer";
import { PaymentState } from "./paymentDetails/PaymentReduces";
const rootReducer = combineReducers({
    auth: AuthReducer,
    paymentState:PaymentState
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
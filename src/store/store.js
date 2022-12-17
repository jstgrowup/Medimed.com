import { combineReducers, applyMiddleware, legacy_createStore, compose } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./MainAuth/AuthReducer";
import { PaymentState } from "./paymentDetails/PaymentReducer";
const rootReducer = combineReducers({
  auth: AuthReducer,
  paymentState: PaymentState,
});
export const store = legacy_createStore(rootReducer,compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
  )
  

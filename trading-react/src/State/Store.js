import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  coin: coinReducer,
  wallet: walletReducer
});

// Create store with middleware
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import coinReducer from "./Coin/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  coin: coinReducer
});

// Create store with middleware
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);
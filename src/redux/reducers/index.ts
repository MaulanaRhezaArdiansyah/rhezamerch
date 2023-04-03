import { combineReducers } from "redux";
import ProductReducer from "./product";
import AuthReducer from "./auth";

export default combineReducers({
  ProductReducer,
  AuthReducer,
});

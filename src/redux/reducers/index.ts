import { combineReducers } from "redux";
import ProductReducer from "./product";
import AuthReducer from "./auth";
import UserReducer from "./user";

export default combineReducers({
  ProductReducer,
  AuthReducer,
  UserReducer,
});

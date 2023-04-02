import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export const store = legacy_createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

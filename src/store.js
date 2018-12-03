import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
const store = createStore(
  reducer,
  compose(
    //async actions with redux
    applyMiddleware(thunk),
    // make your app don't crash with redux
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);
export default store;

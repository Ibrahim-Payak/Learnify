import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; //middleware
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  //add support for redux devtool
  const composeEnhancer = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}

/* eslint-disable no-invalid-this,no-console,dot-notation */
import { applyMiddleware, compose, createStore as createStoreOriginal } from "redux";
import { logger } from "redux-logger";

// enhance createStore for logger/debugger and
export const createStore = (rootReducer, initialState) => {
  const reduxDevtoolsExtCompose = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];
  if (typeof reduxDevtoolsExtCompose === "function") {
    return createStoreOriginal(rootReducer, initialState, reduxDevtoolsExtCompose(applyMiddleware(logger)));
  }
  return createStoreOriginal(rootReducer, initialState, compose(applyMiddleware(logger)));
};

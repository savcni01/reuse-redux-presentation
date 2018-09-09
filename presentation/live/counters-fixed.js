/* eslint-disable no-invalid-this */
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  CounterContainer,
  reducer
} from "./counter";

// default initial state for store
export const INITIAL_STATE = {
  count: 0,
  "oneMoreCounter": {
    count: 0
  }
};

/**
 * Create store by passing reducer function and state into it.
 * Passing the state is optional.
 * If state is not passed in createStore function,
 * it will take INITIAL_STATE passed into reducer as initial state.
 */
const store = createStore(reducer, INITIAL_STATE);

// Two Counters App
export const TwoCountersApp = () => (
  <Provider store={store}>
    <CounterContainer/>
    <hr/>
    <CounterContainer/>
  </Provider>
);


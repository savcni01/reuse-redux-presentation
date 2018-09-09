/* eslint-disable no-invalid-this,no-console,dot-notation */
import React from "react";
import { number, func } from "prop-types";
import { connect, Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "./utils";


// SLICE STATE
const INITIAL_STATE = {
  top: { count: 1 },
  my: {
    custom: {
      bottomCounter: { count: 5 }
    }
  }
};

// sliced counter reducer
const reducer = function (state = INITIAL_STATE, action) {
  console.log("sliced reducer", action, state);
  switch (action.type) {
    case "COUNTER_INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "COUNTER_DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

// combined sliced reducer
export const slicedCombinedReducer = combineReducers({
  top: reducer,
  my: combineReducers({
    custom: combineReducers({
      bottomCounter: reducer
    })
  })
});

// new store for sliced counters
const slicedStore = createStore(slicedCombinedReducer, INITIAL_STATE);

// Presentational Component
class Counter extends React.Component {
  static propTypes = {
    count: number,
    decrement: func,
    increment: func
  };

  static defaultProps = {
    count: 0
  };

  handlePlus = () => {
    this.props.increment();
  };

  handleMinus = () => {
    this.props.decrement();
  };

  render() {
    return (<div>
      <h2>{this.props.count}</h2>
      <fieldset>
        <button onClick={this.handlePlus}>
          +
        </button>
        <button onClick={this.handleMinus}>
          -
        </button>
      </fieldset>
    </div>);
  }
}

// sliced state mapping
const mapStateToProps = (state, { isolateId, selector }) => {
  if (!selector) {
    selector = (globalState) => globalState[isolateId];
  }
  return selector(state);
};

// sliced dispatch mapping
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({
    type: "COUNTER_INCREMENT"
  }),
  decrement: () => dispatch({
    type: "COUNTER_DECREMENT"
  })
});

// create CounterContainerSliced
export const CounterContainerSliced = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// example app
export const TwoCountersSliced = () => (
  <Provider store={slicedStore}>
    <div>
      <CounterContainerSliced isolateId="top"/>
      <CounterContainerSliced
        isolateId="bottom"
        selector={(state) => state.my.custom.bottomCounter}
      />
    </div>
  </Provider>
);

/* eslint-disable no-invalid-this,no-console,dot-notation */
import React from "react";
import { number, func } from "prop-types";
import { connect, Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "./utils";

// TOP and BOTTOM COUNTERS - FIXED VERSION
const INITIAL_STATE = {
  top: { count: 0 },
  bottom: { count: 0 }
};

// top reducer
const reducerTop = function (state = INITIAL_STATE.top, action) {
  switch (action.type) {
    case "TOP_COUNTER_INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "TOP_COUNTER_DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

// bottom reducer
const reducerBottom = function (state = INITIAL_STATE.bottom, action) {
  switch (action.type) {
    case "BOTTOM_COUNTER_INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "BOTTOM_COUNTER_DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

// combined reducer
const combinedReducer = combineReducers({
  top: reducerTop,
  bottom: reducerBottom
});

// store for two counters
const store = createStore(combinedReducer);

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
    return (<div className="counter-example">
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

// top and bottom props mapping
const mapStateToPropsTop = (state) => ({
  count: state.top.count
});

const mapStateToPropsBottom = (state) => ({
  count: state.bottom.count
});

// top and bottom dispatch mapping
const mapDispatchToPropsTop = (dispatch) => ({
  increment: () => dispatch({
    type: "TOP_COUNTER_INCREMENT"
  }),
  decrement: () => dispatch({
    type: "TOP_COUNTER_DECREMENT"
  })
});

const mapDispatchToPropsBottom = (dispatch) => ({
  increment: () => dispatch({
    type: "BOTTOM_COUNTER_INCREMENT"
  }),
  decrement: () => dispatch({
    type: "BOTTOM_COUNTER_DECREMENT"
  })
});

// top and bottom Containers
const CounterContainerTop = connect(
  mapStateToPropsTop,
  mapDispatchToPropsTop
)(Counter);

const CounterContainerBottom = connect(
  mapStateToPropsBottom,
  mapDispatchToPropsBottom
)(Counter);

// top bottom containers app
export const TwoCountersFixed = () => (
  <Provider store={store}>
    <div>
      <CounterContainerTop/>
      <CounterContainerBottom/>
    </div>
  </Provider>
);

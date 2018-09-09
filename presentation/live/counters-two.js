/* eslint-disable no-invalid-this,no-console,dot-notation */
import React from "react";
import { number, func } from "prop-types";
import { connect, Provider } from "react-redux";
import { createStore } from "./utils";

// TRY TO ADD ONE MORE COUNTER
const INITIAL_STATE = {
  count: 0,
  "oneMoreCounter": {
    count: 0
  }
};

// counter reducer
const reducer = function (state = INITIAL_STATE, action) {
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

// new store for two counters
const store = createStore(reducer);

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

// select data from store for UI Component
const mapStateToProps = (state) => ({
  count: state.count
});

// prepare handlers for user actions
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({
    type: "COUNTER_INCREMENT"
  }),
  decrement: () => dispatch({
    type: "COUNTER_DECREMENT"
  })
});

// connect Counter Component to Store, i.e. create Container
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// Two Counters App
export const TwoCountersApp = () => (
  <Provider store={store}>
    <div>
      <CounterContainer/>
      <CounterContainer/>
    </div>
  </Provider>
);

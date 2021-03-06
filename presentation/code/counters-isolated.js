/* eslint-disable no-invalid-this,no-console,dot-notation */
import React from "react";
import { number, func } from "prop-types";
import { connect, Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "./utils";

// ISOLATE STATE
const INITIAL_STATE = {
  top: { count: 33 },
  my: {
    custom: {
      bottomCounter: { count: 46 }
    }
  }
};

// sliced counter reducer
const reducer = function (state = {}, action) {
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

// helper HOF - isolate reducer
const isolateReducer = (isolateId, reducer, iState) => {
  return (state = iState, action) => {
    const [isolateIdAction, unisolatedAction] = action.type.split(".");
    if (isolateId !== isolateIdAction) {
      // do nothing
      return state;
    }
    // reduce
    return reducer(state, {
      ...action,
      type: unisolatedAction
    });
  };
};

// isolated combined reducer
export const combinedReducer = combineReducers({
  top: isolateReducer("top", reducer, INITIAL_STATE.top),
  my: combineReducers({
    custom: combineReducers({
      bottomCounter: isolateReducer("bottom", reducer, INITIAL_STATE.my.custom.bottomCounter)
    })
  })
});

// new store for two counters
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

// isolated state mapping
const mapStateToProps = (state, { isolateId, selector }) => {
  if (!selector) {
    selector = (globalState) =>
      globalState[isolateId];
  }
  const slice = selector(state);
  return {
    count: slice.count
  };
};

// isolated dispatch mapping
const mapDispatchToProps = (dispatch, { isolateId }) => {
  if (isolateId) {
    // new dispatch
    const newDispatch = ((action) => {
      const prefixedType = `${isolateId}.${action.type}`;
      const isolatedAction = {
        ...action,
        type: prefixedType
      };
      return dispatch(isolatedAction);
    });
  }
  return {
    increment: () => newDispatch({
      type: "COUNTER_INCREMENT"
    }),
    decrement: () => newDispatch({
      type: "COUNTER_DECREMENT"
    })
  };
};

// create isolated Container
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// isolated containers app
export const TwoCountersIsolated = () => (
  <Provider store={store}>
    <div>
      <CounterContainer
        isolateId="top"
      />
      <CounterContainer
        isolateId="bottom"
        selector={(state) =>
          state.my.custom.bottomCounter}
      />
    </div>
  </Provider>
);

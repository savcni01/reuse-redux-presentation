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
const mapStateToPropsSliced = (state, { isolateId, selector }) => {
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
  mapStateToPropsSliced,
  mapDispatchToPropsSliced
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


//
//
// ISOLATE STATE
export const INITIAL_STATE_ISOLATE = {
  top: { count: 3 },
  my: {
    custom: {
      bottomCounter: { count: 6 }
    }
  }
};

// helper HOF - isolate reducer
const isolateReducer = (isolateId, originalReducer, initialState) => {
  return (state = initialState, action) => {
    const [isolateIdFromAction, unisolatedAction] = action.type.split(".");
    if (isolateId !== isolateIdFromAction) {
      console.log("action with ALIEN prefix", isolateId, action.type);
      return state;
    }
    console.log("action with MY prefix", isolateId, action.type);
    return originalReducer(state, {
      ...action,
      type: unisolatedAction
    });
  };
};

// combined reducer
export const isolatedCombinedReducer = combineReducers({
  top: isolateReducer("top", reducer, INITIAL_STATE_ISOLATE.top),
  my: combineReducers({
    custom: combineReducers({
      bottomCounter: isolateReducer("bottom", reducer, INITIAL_STATE_ISOLATE.my.custom.bottomCounter)
    })
  })
});

// new store for two counters
const isolatedStore = createStoreEnhanced(isolatedCombinedReducer, INITIAL_STATE_ISOLATE);

// isolated state mapping
const mapStateToPropsIsolated = (state, { isolateId, selector }) => {
  if (typeof selector !== "function" && isolateId) {
    selector = (globalState) => globalState[isolateId];
  }
  return (typeof selector === "function") ? selector(state) : state;
};

// isolated dispatch mapping
const mapDispatchToPropsIsolated = (dispatch, { isolateId }) => {
  if (isolateId) {
    const originalDispatch = dispatch;
    dispatch = ((action) => {
      const prefixedType = `${isolateId}.${action.type}`;
      const isolatedAction = {
        ...action,
        type: prefixedType
      };
      return originalDispatch(isolatedAction);
    });
  }
  return {
    increment: () => dispatch({ type: "COUNTER_INCREMENT" }),
    decrement: () => dispatch({ type: "COUNTER_DECREMENT" })
  };
};

// create isolated Container
export const CounterContainerIsolated = connect(mapStateToPropsIsolated, mapDispatchToPropsIsolated)(Counter);

// isolated containers app
export const TwoCountersIsolated = () => (
  <Provider store={isolatedStore}>
    <div>
      <CounterContainerIsolated isolateId="top"/>
      <CounterContainerIsolated
        isolateId="bottom"
        selector={(state) => state.my.custom.bottomCounter}
      />
    </div>
  </Provider>
);

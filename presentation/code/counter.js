/* eslint-disable no-invalid-this,no-console,dot-notation */
import React from "react";
import { number, func } from "prop-types";
import { connect, Provider } from "react-redux";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { logger } from "redux-logger";

// enhance createStore for logger/debugger and
export const createStoreEnhanced = (rootReducer, initialState) => {
  const reduxDevtoolsExtCompose = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];
  if (typeof reduxDevtoolsExtCompose === "function") {
    return createStore(rootReducer, initialState, reduxDevtoolsExtCompose(applyMiddleware(logger)));
  }
  return createStore(rootReducer, initialState, compose(applyMiddleware(logger)));
};

//
//
// COUNTER APP EXAMPLE
export const INITIAL_STATE = { count: 0 };

/**
 * reducer function contains a switch case statement.
 * It takes two parameters - state and action.
 * Every action object must contain a type property.
 * Based on this type property reducer function performs an operation on state.
 * You can not mutate the state. You must return a new object.
 @param {Object} state - previous state
 @param {Object} action - dispatched action
 @param {String} action.type - type of action
 @returns {Object} new state
 **/
export const reducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "COUNTER_INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "COUNTER_DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};

/**
 * Create store by passing reducer function and state into it.
 * Passing the state is optional.
 * If state is not passed in createStore function,
 * it will take INITIAL_STATE passed into reducer as initial state.
 */
const store = createStoreEnhanced(reducer, INITIAL_STATE);

/**
 * This is our main Counter UI/Dumb Component.
 * After creating it, we will have to connect it with store,
 * so that it can access state saved in the store and modify it.
 * State can be modified only by dispatch function.
 * We will pass the state and dispatch function in this component
 * with help of mapStateToProps and mapDispatchToProps below.
 * This component will receive them in it's props.
 * @class
 */
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
const mapStateToProps = (state) => state;

// prepare handlers for user actions
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "COUNTER_INCREMENT" }),
  decrement: () => dispatch({ type: "COUNTER_DECREMENT" })
});

/**
 * Connect Counter component with store
 * mapStateToProps, mapDispatchToProps help us to define how we want
 * to expose store to this component.
 * We can control which data we want this component to access
 * and which dispatch actions we want this component to have.
 */
export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

// super complex counter app
export const CounterApp = () => (
  <Provider store={store}>
    <CounterContainer/>
  </Provider>
);

//
//
// TRY TO ADD ONE MORE COUNTER
export const INITIAL_STATE_TWO = {
  count: 0,
  "oneMoreCounter": {
    count: 0
  }
};

// custom combined reducer
export const customCombinedReducer = (state, action) => {
  const oneMoreCounter = reducer(state.oneMoreCounter, action);
  const newState = { ...state, oneMoreCounter };
  return reducer(newState, action);
};

// new store for two counters
const twoCountersStore = createStoreEnhanced(customCombinedReducer, INITIAL_STATE_TWO);

// Two Counters App
export const TwoCountersApp = () => (
  <Provider store={twoCountersStore}>
    <div>
      <CounterContainer/>
      <CounterContainer/>
    </div>
  </Provider>
);

//
//
// TOP and BOTTOM COUNTERS - FIXED VERSION
export const INITIAL_STATE_FIXED = {
  top: { count: 0 },
  bottom: { count: 0 }
};

// top reducer
export const reducerTop = function (state = INITIAL_STATE_FIXED.top, action) {
  switch (action.type) {
    case "TOP_COUNTER_INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "TOP_COUNTER_DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};

// bottom reducer
export const reducerBottom = function (state = INITIAL_STATE_FIXED.bottom, action) {
  switch (action.type) {
    case "BOTTOM_COUNTER_INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "BOTTOM_COUNTER_DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};

// combined reducer
export const combinedReducer = combineReducers({
  top: reducerTop,
  bottom: reducerBottom
});

// store for two counters
const tobBottomCountersStore = createStore(combinedReducer, INITIAL_STATE_TWO);

// top and bottom props mapping
const mapStateToPropsTop = (state) => state.top;
const mapStateToPropsBottom = (state) => state.bottom;

// top and bottom dispatch mapping
const mapDispatchToPropsTop = (dispatch) => ({
  increment: () => dispatch({ type: "TOP_COUNTER_INCREMENT" }),
  decrement: () => dispatch({ type: "TOP_COUNTER_DECREMENT" })
});
const mapDispatchToPropsBottom = (dispatch) => ({
  increment: () => dispatch({ type: "BOTTOM_COUNTER_INCREMENT" }),
  decrement: () => dispatch({ type: "BOTTOM_COUNTER_DECREMENT" })
});

// top and bottom Containers
export const CounterContainerTop = connect(mapStateToPropsTop, mapDispatchToPropsTop)(Counter);
export const CounterContainerBottom = connect(mapStateToPropsBottom, mapDispatchToPropsBottom)(Counter);

// top bottom containers app
export const TwoCountersFixed = () => (
  <Provider store={tobBottomCountersStore}>
    <div>
      <CounterContainerTop/>
      <CounterContainerBottom/>
    </div>
  </Provider>
);


//
//
// SLICE STATE
export const INITIAL_STATE_SLICED = {
  top: { count: 1 },
  my: {
    custom: {
      bottomCounter: { count: 5 }
    }
  }
};

// sliced reducers
export const slicedReducer = function (state = INITIAL_STATE_SLICED, action) {
  console.log("reducerSliced", action, state);
  switch (action.type) {
    case "COUNTER_INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "COUNTER_DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};

// combined sliced reducer
export const slicedCombinedReducer = combineReducers({
  top: slicedReducer,
  my: combineReducers({
    custom: combineReducers({
      bottomCounter: slicedReducer
    })
  })
});

// new store for sliced counters
const slicedStore = createStoreEnhanced(slicedCombinedReducer, INITIAL_STATE_SLICED);

// sliced state mapping
const mapStateToPropsSliced = (state, { isolateId, selector }) => {
  if (!selector) {
    selector = (globalState) => globalState[isolateId];
  }
  return selector(state);
};

// sliced dispatch mapping
const mapDispatchToPropsSliced = (dispatch) => ({
  increment: () => dispatch({ type: "COUNTER_INCREMENT" }),
  decrement: () => dispatch({ type: "COUNTER_DECREMENT" })
});

// create CounterContainerSliced
export const CounterContainerSliced = connect(mapStateToPropsSliced, mapDispatchToPropsSliced)(Counter);

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
  top: isolateReducer("top", slicedReducer, INITIAL_STATE_ISOLATE.top),
  my: combineReducers({
    custom: combineReducers({
      bottomCounter: isolateReducer("bottom", slicedReducer, INITIAL_STATE_ISOLATE.my.custom.bottomCounter)
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

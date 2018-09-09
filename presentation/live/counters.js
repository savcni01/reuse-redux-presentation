/* eslint-disable no-invalid-this,no-console,dot-notation */
import React from "react";
import { number, func } from "prop-types";
import { applyMiddleware, compose, createStore, combineReducers, bindActionCreators } from "redux";
import { Provider } from "react-redux";
import {
  islandedConnect,
  isolateReducer,
  makeReducer
} from "react-redux-island";
import { logger } from "redux-logger";

// enhance createStore for logger/debugger and
export const createStoreEnhanced = (rootReducer, initialState) => {
  const reduxDevtoolsExtCompose = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];
  if (typeof reduxDevtoolsExtCompose === "function") {
    return createStore(rootReducer, initialState, reduxDevtoolsExtCompose(applyMiddleware(logger)));
  }
  return createStore(rootReducer, initialState, compose(applyMiddleware(logger)));
};

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

//
//
// ISLAND CONTAINER
export const initialState = {
  top: { count: 3 },
  my: {
    custom: {
      bottomCounter: { count: 6 }
    }
  }
};

// action type
const COUNTER_INCREMENT = "COUNTER_INCREMENT";
const COUNTER_DECREMENT = "COUNTER_DECREMENT";
// action creators
const incrementCounter = () => ({
  type: COUNTER_INCREMENT
});
const decrementCounter = () => ({
  type: COUNTER_DECREMENT
});

// counter reducer
const actionsMap = {
  [COUNTER_INCREMENT]: (state) => ({
    ...state,
    count: state.count + 1
  }),
  [COUNTER_DECREMENT]: (state) => ({
    ...state,
    count: state.count - 1
  })
};
const reducer = makeReducer({ actionsMap, initialState });

// combined reducer
export const combinedReducer = combineReducers({
  top: isolateReducer(["top"], reducer),
  my: combineReducers({
    custom: combineReducers({
      bottomCounter: isolateReducer(["bottom"], reducer)
    })
  })
});

// island store
const store = createStoreEnhanced(combinedReducer, initialState);

// island state amd dispatch mapping
const mapStateToProps = (slicedState, props, state) => slicedState;

const mapDispatchToProps = (dispatch) => ({
  increment: bindActionCreators(incrementCounter, dispatch),
  decrement: bindActionCreators(decrementCounter, dispatch)
});

// create isolated Container
export const CounterContainer = islandedConnect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// island containers app
export const CounterApp = () => (
  <Provider store={store}>
    <div>
      <CounterContainer isolateId="top" selector={(state) => state.top}/>
      <CounterContainer
        isolateId="bottom"
        selector={(state) => state.my.custom.bottomCounter}
      />
    </div>
  </Provider>
);

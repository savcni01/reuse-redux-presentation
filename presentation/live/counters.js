/* eslint-disable no-invalid-this,no-console,dot-notation */
import React from "react";
import { number, func } from "prop-types";
import { combineReducers, bindActionCreators } from "redux";
import { Provider } from "react-redux";
import {
  islandedConnect,
  isolateReducer,
  makeReducer
} from "react-redux-island";
import { createStore } from "./utils";


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

//
//
// ISLAND CONTAINER
const initialState = {
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
const combinedReducer = combineReducers({
  top: isolateReducer(["top"], reducer),
  my: combineReducers({
    custom: combineReducers({
      bottomCounter: isolateReducer(["bottom"], reducer)
    })
  })
});

// island store
const store = createStore(combinedReducer, initialState);

// island state amd dispatch mapping
const mapStateToProps = (slicedState, props, state) => ({
  count: slicedState.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: bindActionCreators(incrementCounter, dispatch),
  decrement: bindActionCreators(decrementCounter, dispatch)
});

// create isolated Container
const CounterContainer = islandedConnect(
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

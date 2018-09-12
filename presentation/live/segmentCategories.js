/* eslint-disable no-invalid-this,no-console,dot-notation */
import React from "react";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { isolateReducer } from "react-redux-island";
import { createStore } from "./utils";

import SegmentCategories from "web-core-frontend-containers/src/components/segmentCategories";

const { index, dataProvider, actions, Container, reducer } = SegmentCategories;

const customDataProvider = { ...dataProvider };
const customDataProviderAha = { ...dataProvider };
const { categoriesReceived } = actions;
customDataProvider.getSegmentsCategories = (dispatch) => {
  setTimeout(() => {
    // console.log("CDP: getSegmentsCategories")
    dispatch(categoriesReceived([
      { id: 99, name: "Custom" },
      { id: 10, name: "My Category" },
      { id: 11, name: "His Category" },
      { id: 15, name: "Our Category" },
      { id: 12, name: "Hre Category" }
    ]));
  }, 499);
};

customDataProviderAha.getSegmentsCategories = (dispatch) => {
  setTimeout(() => {
    // console.log("CDP: getSegmentsCategories")
    dispatch(categoriesReceived([
      { id: 10, name: "Aha" },
      { id: 11, name: "Uhu" },
      { id: 15, name: "Oho" },
      { id: 12, name: "OI-YO I-YA I-YO" }
    ]));
  }, 599);
};

const wrapStyle = { background: "white", border: "1px solid gray", margin: "20px", padding: "10px", width: "20%" };

const store = createStore(combineReducers({
  [index]: isolateReducer(["One", "CATEGORY_RESET"], reducer),
  a: combineReducers({
    b: isolateReducer(["Two", "CATEGORY_RESET"], reducer)
  })
}), {
  [index]: {
    selectedSegmentCategoryId: 2
  },
  a: {
    b: {
      selectedSegmentCategoryId: 99
    }
  }
});

// island containers app
export const CategoriesApp = () => (
  <Provider store={store}>
    <div style={wrapStyle}>
      One: <Container selector={(state) => state[index]} dataProvider={customDataProviderAha} isolateId="One"/>
      <br/>
      Two: <Container selector={(state) => state.a.b} dataProvider={customDataProvider} isolateId="Two"/>
    </div>
  </Provider>
);

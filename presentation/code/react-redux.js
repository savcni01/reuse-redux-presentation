import React from "react";
import ReactDOM from "react-dom";
import { func, string, array } from "prop-types";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// to-do item: dumb/ui component
const TodoItem = ({ todo, destroyTodo }) => {
  return (
    <div>
      {todo.text}
      <span onClick={destroyTodo}> x </span>
    </div>
  );
};
TodoItem.propTypes = {
  destroyTodo: func,
  todo: string
};

// list of to-do items
const TodoList = ({ list }) => {
  return (
    <div>
      {list.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

const TodoFilters = () => {
  return (
    <div>
      ...
    </div>
  );
};

// to-do app main component
class TodoApp extends React.Component {
  render() {
    return (
      <div className={"todo-app"}>
        <TodoFilters/>
        <TodoList list={this.state.todoList}/>
      </div>
    );
  }
}

// Render React Example App
ReactDOM.render(
  <TodoApp/>,
  document.getElementById("root")
);

const todoAppReducer = {};

// createStore is Redux's method
const store = createStore(todoAppReducer, {});

// Render React Example App with Provider
// Provider is given the store as a prop
ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app-node")
);

// take state for item
const mapStateToProps = (state, { id }) => {
  return {
    todo: state.todos[id]
  };
};

// dispatch destroy action
const mapDispatchToProps = (dispatch) => {
  return {
    destroyTodo: () =>
      dispatch({
        type: "DESTROY_TODO"
      })
  };
};

// create Connected Component (ReduxContainer)
const TodoItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);


// use container at App
const TodoListWithContainer = ({ list }) => {
  return (
    <div>
      {list.map((id) => (
        <TodoItemContainer key={id} id={id}/>
      ))}
    </div>
  );
};
TodoList.propTypes = {
  list: array
};

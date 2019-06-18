import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleTodo } from "../actions/index";

export class TodoList extends Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo, index) => (
          <div>{todo.value}</div>
        ))}
        <form onSubmit={event => this.props.toggleTodo(event, this.props.todo)}>
          <input />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo }
)(TodoList);

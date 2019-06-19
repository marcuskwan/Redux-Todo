import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleTodo, deleteTodo } from "../actions/index";

export class TodoList extends Component {
  state = {
    // setting todo to an empty string initially
    todo: ""
  };

  handleChanges = event => {
    // changing our empty todo in state to match the value(s) we're typing in the event.target(input)
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTodoAndResetTodoState = event => {
    this.props.addNewTodo(event, this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <div className="todo" key={todo.id}>
            <li
              className={todo.completed && "completed"}
              onClick={event => this.props.toggleTodo(event, todo.id)}
            >
              {todo.value}
            </li>
            <button onClick={event => this.props.deleteTodo(event, todo.id)}>
              Delete
            </button>
          </div>
        ))}
        <form onSubmit={this.addNewTodoAndResetTodoState}>
          <input
            name="todo"
            placeholder="Add New Todo"
            value={this.state.todo}
            onChange={this.handleChanges}
          />
          <button>Submit</button>
        </form>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo, deleteTodo }
)(TodoList);

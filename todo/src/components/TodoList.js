import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleTodo } from "../actions/index";

export class TodoList extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todo: state.todo
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo }
)(TodoList);

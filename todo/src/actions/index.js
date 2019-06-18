const addNewTodo = newTodo => {
  return {
    payload: newTodo
  };
};

const toggleTodo = todo => {
  return {
    payload: todo.id
  };
};

export default { addNewTodo, toggleTodo };

// exporting ADD_NEW_TODO const
export const ADD_NEW_TODO = "ADD_NEW_TODO";
// creating addNewTodo fn that takes in an event and a Todo, and sets the payload: newTodo
export const addNewTodo = (event, newTodo) => {
  event.preventDefault();
  return {
    type: ADD_NEW_TODO,
    payload: newTodo,
    completed: false,
    id: Date.now()
  };
};

// exporting TOGGLE_TODO const
export const TOGGLE_TODO = "TOGGLE_TODO";
// creating toggleTodo fn that takes in the index, and returns an object with payload: todo.id
export const toggleTodo = (event, todo) => {
  event.preventDefault();
  return {
    type: TOGGLE_TODO,
    payload: todo.id
  };
};

// exporting DELETE_TODO const 
export const DELETE_TODO = "TOGGLE_TODO";
// creating deleteTodo fn that takes in the todo, and an object with payload: todo.id 
export const deleteTodo = (event, todo) => {
  event.preventDefault();
  return {
    type: DELETE_TODO,
    payload: todo.id
  };
};


export default { addNewTodo, toggleTodo };

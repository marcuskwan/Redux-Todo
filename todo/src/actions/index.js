// exporting ADD_NEW_TODO const
export const ADD_NEW_TODO = "ADD_NEW_TODO";
// creating addNewTodo fn that takes in an event and a Todo, and sets the payload: newTodo
const addNewTodo = (event, newTodo) => {
  event.preventDefault();
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};

// exporting TOGGLE_TODO const
export const TOGGLE_TODO = "TOGGLE_TODO";
// creating toggleTodo fn that takes in the index, and returns an object with payload: index
const toggleTodo = (event, index) => {
  event.preventDefault();
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};

export default { addNewTodo, toggleTodo };

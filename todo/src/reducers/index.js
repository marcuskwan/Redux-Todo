// importing variables of action type
import { ADD_NEW_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/index";

// declaring initialState, setting todos to an array with an example todo object inside
const initialState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false,
      id: Date.now()
    }
  ]
};

// exporting and declaring reducer fn
export const reducer = (state = initialState, action) => {
  // checking action.type
  switch (action.type) {
    // in the case of ADD_NEW_TODO
    case ADD_NEW_TODO:
      const newTodo = {
        id: Date.now(),
        value: action.payload,
        completed: false
      };
      return {
        // return a store object with a todos array set to the previousStore.todos, with a new action.payload(newTodo)
        todos: [...state.todos, newTodo]
      };
    // in the case of TOGGLE_TODO
    case TOGGLE_TODO:
      // return a store object of todos array set to a new mapped array that checks whether the id of the object we clicked on matches the id of the object in our previousStore. If it does, it toggles the completed property, otherwise it returns the same todo.
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    // in the case of TOGGLE_TODO
    case DELETE_TODO:
      // return a store object of todos array set to a new mapped array that checks whether the id of the object we clicked on matches the id of the object in our previousStore. If it does, it omits the todo, otherwise it returns the same todo.
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;

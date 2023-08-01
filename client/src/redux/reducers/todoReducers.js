import * as actionTypes from "../actions/type";
const todoReducers = (state = [], action) => {
  //(state{has prev state},action{has new object})
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state]; //updated todo value

    case actionTypes.GETALL_TODO:
      return action.payload; //only new data(todo)

    case actionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );

    case actionTypes.UPDATE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );

    case actionTypes.DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload._id);

    default:
      return state;
  }
};
export default todoReducers;

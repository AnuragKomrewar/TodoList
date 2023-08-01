import React, { useState } from "react";
import "./TodoForm.css";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";


const TodoForm = () => {
  const [text, textUpdateFunction] = useState(""); //useState(defaultValue)
  const dispatch=useDispatch();// we dispatch actions in redux
  const onInputChangeHandler = (event) => {
    textUpdateFunction(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault(); //prevents page from refreshing
    dispatch(addNewTodo(text));//calling api
    textUpdateFunction('');
  };

  return (
    <form className="form" onSubmit={onFormSubmitHandler}>
      <input
        placeholder="Enter ToDo"
        className="input"
        onChange={onInputChangeHandler} //triggers an event
        value={text}
      />
    </form>
  );
};
export default TodoForm;

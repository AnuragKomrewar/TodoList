import "./Todo.css";
import { toggleTodo, updateTodo,deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const dispatch = useDispatch();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEditing(prevState=> !prevState);

    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        //for done todos we need to mark line
        textDecoration: todo.done ? "line-through" : " ",
        color: todo.done ? '#bdc3c7' : '#34495e'
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={formSubmitHandler}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </form>

      <span className="icon"
      onClick={()=>{dispatch(deleteTodo(todo._id))}}>
        <i className="fa fa-trash" />
      </span>

      <span
        className="icon"
        onClick={() => {
          setEditing((prevState) => !prevState);
        }}
      >
        <i className="fa fa-pen" />
      </span>
    </li>
  );
};
export default Todo;

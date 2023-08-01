import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type";
//fetching all todos from database with the help of _getAllTodos_ API
const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo); //ectracting all todos from redux store :state=heading
  const currentTab = useSelector((state) => state.currentTab);
  useEffect(() => {
    dispatch(getAllTodos());
  }, []); //only when the component render

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter(todo => !todo.done); //showing not done todos
    } else if (currentTab === DONE_TODOS) {
      return todos.filter(todo => todo.done); //done value true
    }
  };

  const removeDoneTodos=()=>{
    todos.forEach(({done,_id})=>{
      if(done){
        dispatch(deleteTodo(_id));
      }

    })  //forEach function does not return anything map returns
  }
  /* DISPLAYING ALL TODOS ON SCREEN */
  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
        {
          todos.some(todo=> todo.done)?
          (<button onClick={removeDoneTodos} className="tabs_button clear">
            Remove Done Todos
            </button>) : null
        } 
      </div>
      <ul>
        {
        getTodos().map(todo => (
          <Todo 
            key={todo._id}
            todo={todo}
         />
        ))
        }
      </ul>
    </article>
  );
};
export default Todos;

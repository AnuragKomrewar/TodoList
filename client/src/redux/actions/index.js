//all api calls
import axios from 'axios';
import { ADDNEW_TODO , GETALL_TODO, TOGGLE_TODO,UPDATE_TODO, DELETE_TODO,TOGGLE_TAB} from './type';
//backend url
const API_URL='http://localhost:8000'; 
export const addNewTodo=(data)=> async(dispatch)=>{ //addnewtodo is a api
    try{
       const response= await axios.post(`${API_URL}/todos`, {data});//takes min 2 args
       dispatch({type:ADDNEW_TODO ,payload:response.data});//dispatch obj will go to reducer action
       //payload:- to set the response from api to redux 
    }catch(error){
        console.log('Error while calling addNewTodo API', error.message);
    }
}
//export default addNewTodo;

export const getAllTodos=()=>async(dispatch)=>{//getAllTodos is a api}
    try{
        const response= await axios.get(`${API_URL}/todos`);//takes only 1 arg
        dispatch({type:GETALL_TODO ,payload:response.data});//dispatch obj will go to reducer
     }catch(error){
         console.log('Error while calling getAllTodo API', error.message);
     }
}
//* With the help of reducers we store data to redux  */

export const toggleTodo=(id)=>async(dispatch)=>{//getAllTodos is a api}
    try{
        const response= await axios.get(`${API_URL}/todos/${id}`);//takes only 1 arg
        dispatch({type:TOGGLE_TODO ,payload:response.data});//dispatch obj will go to reducer action
     }catch(error){
         console.log('Error while calling toggletodo API', error.message);
     }
}

export const updateTodo=(id,data)=>async(dispatch)=>{//updateTodo  is a api}
    try{
        const response= await axios.put(`${API_URL}/todos/${id}`,{data});//takes only 1 arg
        dispatch({type:UPDATE_TODO ,payload:response.data});//dispatch obj will go to reducer action
     }catch(error){
         console.log('Error while calling update API', error.message);
     }
}

export const deleteTodo=(id)=>async(dispatch)=>{//updateTodo  is a api}
    try{
        const response= await axios.delete(`${API_URL}/todos/${id}`);//takes only 1 arg
        dispatch({type:DELETE_TODO ,payload:response.data});//dispatch obj will go to reducer action
     }catch(error){
         console.log('Error while calling deleteTodo API', error.message);
     }
}

export const toggleTab=(tab)=>async(dispatch)=>{
    dispatch({type:TOGGLE_TAB ,selected:tab});
}
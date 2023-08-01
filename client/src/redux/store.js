import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducers from './reducers/todoReducers';
import { tabReducer } from './reducers/tabReducer';
const reducer=combineReducers({
    todo:todoReducers,
    currentTab:tabReducer
})
const middleware=[thunk];
const store=createStore(
    reducer,
    //middleware
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;
import {  legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todosReducers } from './redusers/TodoRedusers'
import { tabReducer } from './redusers/TableRedusers'
// import {combineReducers} from "redux"

const reduser = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})

const middleware = [thunk]

const store = createStore(
    reduser, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

//// 57 минута
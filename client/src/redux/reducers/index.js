import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import counter from './counter'
import form from './form'

export default combineReducers({ todos, visibilityFilter, counter, form });

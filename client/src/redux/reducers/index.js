import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import counter from "./counter";
import login from "./login";
import form from "./form";
import register from "./register";

export default combineReducers({
	todos,
	visibilityFilter,
	counter,
	form,
	login,
	register
});

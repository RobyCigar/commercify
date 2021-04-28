import { combineReducers } from "redux";
import { alert, login, product, register, user, welcome } from './reducers'


export default combineReducers({
	alert,
	login,
	register,
	user,
	welcome,
	product,
});
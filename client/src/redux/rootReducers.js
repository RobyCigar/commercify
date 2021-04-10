import { combineReducers } from "redux";
import { login, product, register, user, welcome } from './reducers'


export default combineReducers({
	login,
	register,
	user,
	welcome,
	product,
});
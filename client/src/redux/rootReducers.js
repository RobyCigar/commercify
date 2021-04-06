import { combineReducers } from "redux";
import { loginReducer } from "../pages/login/reducer";
import { registerReducer } from "../pages/register/reducer";
import { profileReducer } from "../pages/profile/reducer";
import { welcomeReducer } from "../pages/welcome/reducer";

export default combineReducers({
	loginReducer,
	registerReducer,
	profileReducer,
	welcomeReducer,
});
import { createStore, combineReducers } from "redux";
import { loginReducer } from "./pages/login/reducer";
import { registerReducer } from "./pages/register/reducer";
import { profileReducer } from "./pages/profile/reducer";
import { welcomeReducer } from "./pages/welcome/reducer";

const rootReducer = combineReducers({
	loginReducer,
	registerReducer,
	profileReducer,
	welcomeReducer,
});

export default createStore(rootReducer);

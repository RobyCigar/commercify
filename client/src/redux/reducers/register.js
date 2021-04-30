import {
	REGISTER_EMAIL,
	REGISTER_FIRSTNAME,
	REGISTER_LASTNAME,
	REGISTER_FULLNAME,
	REGISTER_PASSWORD,
	REGISTER_PASSWORD_CHECK,
	REGISTER_SUBMIT,
	REGISTER_ALERT,
} from "redux/constants";

const initialState = {
	email: "",
	firstname: "",
	lastname: "",
	fullname: "",
	password: "",
	passwordCheck: "",
	alert: null
}

const registerReducer = (state = initialState, action) => {
	const payload = action.payload;
	switch (action.type) {
		case REGISTER_EMAIL:
			return { ...state, email: payload };
		case REGISTER_FIRSTNAME:
			return { ...state, firstName: payload };
		case REGISTER_LASTNAME:
			return { ...state, lastName: payload };
		case REGISTER_PASSWORD:
			return { ...state, password: payload };
		case REGISTER_PASSWORD_CHECK:
			return { ...state, passwordCheck: payload };
		case REGISTER_SUBMIT:
			return { ...state, submit: true}		
		case REGISTER_ALERT:
			return { ...state, alert: payload }
		default:
			return state;
	}
}


export default registerReducer;
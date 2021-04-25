import { EMAIL, PASSWORD, LOGIN_ALERT, LOGIN_SUCCESS, LOGIN_SUBMIT } from 'redux/constants'

const initialState = {
	email: "",
	password: "",
	alert: null,
	success: false
}

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case EMAIL:
			return { ...state, email: action.payload };
		case PASSWORD:
			return { ...state, password: action.payload };
		case LOGIN_ALERT:  
			return { ...state, alert: action.payload}
		case LOGIN_SUBMIT: 
			return { ...state, submit: true}
		default: 
			return state
	}
};

export default loginReducer
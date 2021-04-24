import { LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN_ALERT, LOGIN_SUCCESS, LOGIN_SUBMIT } from 'redux/constants'

const initialState = {
	email: "",
	password: "",
	alert: null,
	success: false
}

const loginReducer = (state = initialState, action) => {
	console.log('aksi', action)
	switch (action.type) {
		case LOGIN_EMAIL:
			return { ...state, email: action.payload };
		case LOGIN_PASSWORD:
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
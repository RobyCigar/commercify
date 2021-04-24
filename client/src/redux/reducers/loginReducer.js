import { EMAIL, PASSWORD, LOGIN_ALERT, LOGIN_SUCCESS, LOGIN_SUBMIT } from 'redux/constants'

const initialState = {
	email: "",
	password: "",
	alert: null,
	success: false
}

const loginReducer = (state = initialState, action) => {
	console.log('aksi', action)
	console.log("state", state)
	switch (action.type) {
		case EMAIL: {
			console.log('here in email')
			return { ...state, email: action.payload };}
		case PASSWORD:
			return { ...state, password: action.payload };
		case LOGIN_ALERT:  
			return { ...state, alert: action.payload}
		case LOGIN_SUBMIT: {
			console.log('login')
			return { ...state, submit: true}
		}
		default: 
			return state
	}
};

export default loginReducer
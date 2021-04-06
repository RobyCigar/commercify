import { EMAIL, PASSWORD, ALERT, SUCCESS } from './constant'

const initialState = {
	email: "",
	password: "",
	alert: null,
	success: false
}

export const loginReducer = (state = initialState, action) => {
	console.log('sttat', state)
	switch (action.type) {
		case EMAIL:
			return { ...state, email: action.payload };
		case PASSWORD:
			return { ...state, password: action.payload };
		case ALERT: 
			return { ...state, alert: action.payload}
		case SUCCESS: 
			return { ...state, success: true}
		default: 
			return state
	}
};
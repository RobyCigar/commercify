import { USER, TOKEN } from 'redux/constants'
const initialState = {
	email: "",
	firstName: "",
	id: "",
	lastName: "",
	role: "",
	authenticate: false,
	token: null
}

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOKEN: {
			return {...state, token: action.payload}
		}
		case USER: {
			console.log("user here", action)
			return {...state, ...action.payload, authenticate: action.authenticate}
		}
		default:
			return state
	}
}

export default userReducer
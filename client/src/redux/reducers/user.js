import { USER, TOKEN } from 'redux/constants'
const initialState = {
	email: null,
	firstName: null,
	id: null,
	lastName: null,
	role: null,
	token: null
}

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOKEN: {
			return {...state, token: action.payload}
		}
		case USER: {
			return {...state, ...action.payload}
		}
		default:
			return state
	}
}

export default userReducer
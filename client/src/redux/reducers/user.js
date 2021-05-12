import { USER, TOKEN, REMOVE_TOKEN, FETCH_USER } from 'redux/constants'
const initialState = {
	email: null,
	firstName: null,
	id: null,
	lastName: null,
	role: null,
	token: null,
	logout: null
}

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOKEN: {
			return {...state, token: action.payload}
		}
		case REMOVE_TOKEN: {
			return {...state, token: null}
		}
		case FETCH_USER: {
			return {...state}
		}
		case USER: {
			return {...state, ...action.payload}
		}
		default:
			return state;
	}
}

export default userReducer
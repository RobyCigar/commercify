import { EMAIL, PASSWORD } from './constant'

const initialState = {
	email: "",
	password: ""
}

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case EMAIL:
			return { ...state, email: action.val };
		case PASSWORD:
			return { ...state, password: action.val };
		default: 
			return state
	}
};
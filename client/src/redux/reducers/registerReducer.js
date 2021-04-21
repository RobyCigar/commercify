import {
	EMAIL,
	FIRSTNAME,
	LASTNAME,
	FULLNAME,
	PASSWORD,
	CHECK_PASSWORD,
} from "/redux/constants";

const initialState = {
	email: "",
	firstname: "",
	lastname: "",
	fullname: "",
	password: "",
	checkPassword: ""
}

const registerReducer = (state = initialState, action) => {
	const val = action.val;
	switch (action.type) {
		case EMAIL:
			return { ...state, email: val };
		case FIRSTNAME:
			return { ...state, firstname: val };
		case LASTNAME:
			return { ...state, lastname: val };
		case FULLNAME:
			return { ...state, fullname: val };
		case PASSWORD:
			return { ...state, password: val };
		case CHECK_PASSWORD:
			return { ...state, checkPassword: val };
		default:
			return state;
	}
}


export default registerReducer;
import {
	EMAIL,
	FIRSTNAME,
	LASTNAME,
	FULLNAME,
	PASSWORD,
	CHECK_PASSWORD,
} from "../actionTypes";

export default function reducer(state, action) {
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
			return { ...state, password1: val };
	}
}

import {
	PRODUCT_ADD_NAME,
	PRODUCT_ADD_DESCRIPTION,
	PRODUCT_ADD_PRICE,
	PRODUCT_ADD_PICTURE,
	PRODUCT_ADD_QUANTITY,
	PRODUCT_ADD_SUBMIT
} from "redux/constants";

const initialState = {
	name: "",
	description: "",
	picture: "",
	quantity: 0,
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_ADD_NAME: {
			return { ...state, name: action.payload };
		}
		case PRODUCT_ADD_DESCRIPTION: {
			return { ...state, description: action.payload };
		}
		case PRODUCT_ADD_PRICE: {
			return { ...state, price: action.payload };
		}
		case PRODUCT_ADD_PICTURE: {
			return { ...state, picture: action.payload };
		}
		case PRODUCT_ADD_QUANTITY: {
			return { ...state, quantity: action.payload };
		}
		case PRODUCT_ADD_SUBMIT: {
			return { ...state, submit: true}
		}
		default:
			return state;
	}
};

export default productReducer
import {
	PRODUCT_ADD_NAME,
	PRODUCT_ADD_DESCRIPTION,
	PRODUCT_ADD_PRICE,
	PRODUCT_ADD_PICTURE,
	PRODUCT_ADD_QUANTITY,
	PRODUCT_ADD_SUBMIT,
	PRODUCT_ADD_ALERT,
} from "redux/constants";

const initialState = {
	name: "",
	description: "",
	picture: null,
	quantity: 0,
};

const productReducer = (state = initialState, action) => {
	const payload = action.payload
	switch (action.type) {
		case PRODUCT_ADD_NAME: {
			return { ...state, name: payload };
		}
		case PRODUCT_ADD_DESCRIPTION: {
			return { ...state, description: payload };
		}
		case PRODUCT_ADD_PRICE: {
			return { ...state, price: payload };
		}
		case PRODUCT_ADD_PICTURE: {
			console.log('here paylaod', payload)
			return { ...state, picture: payload };
		}
		case PRODUCT_ADD_QUANTITY: {
			return { ...state, quantity: payload };
		}
		case PRODUCT_ADD_SUBMIT: {
			return { ...state, submit: true}
		}
		case PRODUCT_ADD_ALERT: {
			return { ...state, alert: payload}
		}
		default:
			return state;
	}
};

export default productReducer
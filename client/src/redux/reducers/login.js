const initialState = {
	username: "fake",
	password: "fakepwd"
}

export default function (state = initialState, action ) {
	switch(action.type) {
		case "USERNAME": {
			console.log("username here")
			return {
				...state, username: action.payload
			};
		}
		case "PASSWORD": {
			console.log("pw here")
			return {
				password: action.payload
			};
		}
		default: {
			console.log("default hereeeeee")
			return state;
		}
	}
}
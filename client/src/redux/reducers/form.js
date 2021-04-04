const initialState = {
	form: "DEFAULT FORM" 
}

export default function form(state = initialState, action) {

	switch (action.type) {
		case "FORM": { 
			console.log("here INCREMENT")
				return {
					form: action
				}
			}
		case "DECREMENT": {
			console.log("here DECREMENT")
			return {
				num: state.num -1
			}
		}
		default: {
			console.log("here DEFAULT FORM")
			return state
		}
	}
}
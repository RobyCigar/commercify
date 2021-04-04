
const initialState = {
	num: 0
}

export default function counter(state = initialState, action) {

	switch (action.type) {
		case "INCREMENT": { 
			console.log("here INCREMENT")
				return {
					num: state.num +2
				}
			}
		case "DECREMENT": {
			console.log("here DECREMENT")
			return {
				num: state.num -1
			}
		}
		default: {
			console.log("here DEFAULT")
			return state
		}
	}
	console.log('here somewhere')
}
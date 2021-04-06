export const mapDispatchToProps = dispatch => {
	console.log("dispatched", dispatch)
	return {
		onChange: payload => dispatch({ type: "EMAIL", payload: payload.val})
	}
}
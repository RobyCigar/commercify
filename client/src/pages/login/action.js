export const mapStateToProps = (state) => {
	const { username, password } = state.login

	return { username: username, password: password };
};

export const mapDispatchToProps = (dispatch) => {
	console.log("mapDispatchToProps", dispatch);

	return {
		handleUsername: payload => 
			dispatch({type: "EMAIL", payload: payload.target.value}),
		handlePassword: payload => 
			dispatch({type: "PASSWORD", payload: payload.target.value}),
		handleSubmit: (payload) =>
			dispatch({ type: "LOGIN", payload: payload}),
	};
};

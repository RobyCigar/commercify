import { LOGIN } from './constant'

export const mapStateToProps = (state) => {
	return {...state.loginReducer};
};

export const mapDispatchToProps = (dispatch) => {
	console.log("mapDispatchToProps", dispatch);

	return {
		handleChange: payload => {
			console.log(payload.target.value)
			return dispatch({type: payload.target.name, payload: payload.target.value})
		},
		handleSubmit: payload => {
			dispatch({type: LOGIN, payload: payload})
		},
	};
};
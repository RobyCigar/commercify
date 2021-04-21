import { LOGIN_SUBMIT } from '../constant'

const mapStateToProps = (state) => {
	return {...state.loginReducer, authenticate: state.userReducer.authenticate};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: payload => {
			console.log(payload.target.value)
			return dispatch({type: payload.target.name, payload: payload.target.value})
		},
		handleSubmit: evt => {
			evt.preventDefault()
			dispatch({type: LOGIN_SUBMIT})
		},
	};
};

export default {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}
import { LOGIN_SUBMIT, LOGIN_ALERT } from 'redux/constants'

const mapStateToProps = (state) => {
	return {...state.login, user: state.user.email, token: state.user.token};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: payload => {
			return dispatch({type: payload.target.name, payload: payload.target.value})
		},
		handleSubmit: evt => {
			evt.preventDefault()
			return dispatch({type: LOGIN_SUBMIT})
		},
		handleAlert: () => {
			return dispatch({type: LOGIN_ALERT, payload: null})
		}
	};
};

const action = {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}

export default action;
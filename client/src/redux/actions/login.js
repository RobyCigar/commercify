import { LOGIN_SUBMIT } from 'redux/constants'

const mapStateToProps = (state) => {
	console.log('statee', state)
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
	};
};

export default {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}
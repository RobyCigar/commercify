import { REGISTER_SUBMIT, REGISTER_ALERT } from 'redux/constants'

const mapStateToProps = state => {
	const {alert, password, passwordCheck} = state.register
	return {
		alert: alert,
		password: password,
		passwordCheck: passwordCheck
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChange: evt => {
			return dispatch({ type: evt.target.name, payload: evt.target.value})
		},
		handleSubmit: evt => {
			evt.preventDefault()
			return dispatch({ type: REGISTER_SUBMIT })
		},
		handleAlert: payload => {
			return dispatch({ type: REGISTER_ALERT, payload: payload })
		}
	}
}

export default {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}
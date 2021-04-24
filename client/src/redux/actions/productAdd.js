import { PRODUCT_ADD_SUBMIT } from 'redux/constants'

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: evt => {
			const { name, value } = evt.target
			return dispatch({type: name, payload: value})
		},
		handleSubmit: evt => {
			evt.preventDefault()
			return dispatch({type: PRODUCT_ADD_SUBMIT})
		}
	}
} 

export default {
	dispatch: mapDispatchToProps
}
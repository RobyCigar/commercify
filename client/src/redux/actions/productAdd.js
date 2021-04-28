import { PRODUCT_ADD_SUBMIT } from 'redux/constants'

const mapStateToProps = ({alert}) => {
	return {message: alert.message};
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: evt => {
			const { name, value } = evt.target
			return dispatch({type: name, payload: value})
		},
		handleSubmit: evt => {
			evt.preventDefault()
      console.log("submitted")
			return dispatch({type: PRODUCT_ADD_SUBMIT})
		}
	}
} 

export default {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}
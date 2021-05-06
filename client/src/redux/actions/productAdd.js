import { PRODUCT_ADD_SUBMIT } from 'redux/constants'

const mapStateToProps = ({alert}) => {
	return {message: alert.message};
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: evt => {
			let { name, value } = evt.target
			
			// if I have files input, then change let value with files
			if(evt.target.files) {

				value = evt.target.files[0];
				console.log("ini value ", value)
				console.log("ini evt", evt)
			}

			return dispatch({type: name, payload: value})
		},
		handleSubmit: evt => {
			evt.preventDefault()
			return dispatch({type: PRODUCT_ADD_SUBMIT})
		}
	}
} 

export default {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}
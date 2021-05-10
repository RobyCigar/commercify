import { PRODUCT_ADD_SUBMIT, PRODUCT_ADD_PICTURE } from 'redux/constants'

const mapStateToProps = ({product}) => {
	return {alert: product.alert};
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
		},
		handlePicture: file => {
			console.log("pic", file)
			return dispatch({type: PRODUCT_ADD_PICTURE, payload: file })
		}
	}
} 

const action = {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}

export default action;
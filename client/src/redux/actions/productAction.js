const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: evt => {
			dispatch({type: evt.target.name, payload: evt.target.value})
		},
		onSubmit: evt => {
			dispatch({type: "SUBMIT"})
		}
	}
}

export default {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}
import React from "react";
import { connect } from "react-redux";
import { counter } from "../redux/actions";

const mapStateToProps = state =>  {
console.log('mapStateToProps', state)
 return ({num: state.counter.num, input: state.form.form.payload});

}

const mapDispatchToProps = dispatch => {

console.log("mapDispatchToProps", dispatch)

return ({
  onLoad: payload =>
    dispatch({ type: "INCREMENT", payload: payload }),
  onUnload: payload =>
    dispatch({ type: "DECREMENT", payload: payload }),
  form: payload => {
  	console.log('ini value', payload.target.value)
  	return (
  		dispatch({type: "FORM", payload: payload.target.value})
  	)
  }
});}



const Shit = (props) => {
	const [shit, setShit] = React.useState(0)

	console.log("INI PROPS", props)

	return (
		<div>
			<h1>HELLO BIT*H</h1>
			<h1>{props.input}</h1>
			<input onChange={props.form} type="text" name="title"/>
			<button onClick={props.onLoad}>Add shit</button>
			<button onClick={props.onUnload}>Reduce shit</button>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Shit);

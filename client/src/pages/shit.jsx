import { connect } from "react-redux";
import { login } from "../redux/actions";

const mapStateToProps = (state) => {
	console.log("ini stat hereeee", state)
	const uname = state.login.username;
	const pw = state.login.password;

	return { username: uname, password: pw };
};

const mapDispatchToProps = (dispatch) => {
	console.log("mapDispatchToProps", dispatch);

	return {
		handleUsername: payload => 
			dispatch({type: "USERNAME", payload: payload.target.value}),
		handlePassword: payload => 
			dispatch({type: "PASSWORD", payload: payload.target.value}),
		handleSubmit: (payload) =>
			dispatch({ type: "LOGIN", payload: payload}),
	};
};



const Shit = (props) => {

	console.log("INI PROPS", props);

	return (
		<div>
			<h1>HELLO BIT*H</h1>
			<h1>username: {props.username}</h1>
			<h1>password: {props.password}</h1>
			<p>Username</p>
			<input onChange={props.handleUsername} type="text" name="username" />
			<p>Pass</p>
			<input onChange={props.handlePassword} type="text" name="password" />
			<button type="submit" onClick={props.handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Shit);

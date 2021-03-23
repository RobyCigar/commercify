import { FormText } from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import Forms from "../components/forms";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { UserCtx } from "../App";
import { login } from "./api";

const Login = (props) => {
	const { user, setUser } = useContext(UserCtx);
	const  [email, setEmail]  = useState("");
	const [password, setPassword] = useState("");
	const [submit, setSubmit] = useState(false)

	useEffect(() => {
		if(submit) {
			login({email: email, password: password})
		}
	}, [submit]);

	const onSubmit = (evt) => {
		evt.preventDefault();
		setSubmit(true)
	};

	const onChange = (evt) => {
		const target = evt.target;
		switch (target.type) {
			case "email":
				setEmail("shit");
				break;
			case "password":
				setPassword("psdfds");
				break;
		}
	};

	console.log("email",email)
	console.log("pass",password)

	return (
		<>
			<Navbar register={true} />
			<div className="m-5 px-5 w-50 border-right">
				<h2 className="my-5">
					<strong>Login</strong>
				</h2>
				<Forms
					email={true}
					password={true}
					multiple={false}
					textArea={false}
					onSubmit={onSubmit}
					onChange={onChange}
				/>
				<FormText color="muted">
					Don't have account? <Link to="/register">Sign up </Link>now
				</FormText>
			</div>
			<Footer />
		</>
	);
};

export default Login;

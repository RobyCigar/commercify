import { FormText, Alert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { useState, useEffect, useContext, useReducer } from "react";
import GoogleButton from "react-google-button";
import { connect } from 'react-redux'
import axios from "axios";

import { mapDispatchToProps } from './action'

import Forms from "../../components/forms";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { UserCtx } from "../../App";
import { login } from "../api";

const Login = (props) => {
	const { user, setUser } = useContext(UserCtx);
	const [alert, setAlert] = useState(false);
	const [success, setSuccess] = useState(false)

	const onSubmit = async (evt) => {
		evt.preventDefault();
		setUser(login(null, setAlert ,setSuccess, setUser))
	};

	const onChange = (evt) => {
		const target = evt.target;
	};

	if(user) {
		return (
			<Redirect to="home"/>
		)
	}
	return (
		<>
			<Navbar register={true} />
			{alert ? <Alert color="danger">{alert}</Alert> : null}
			<h2 className="text-center text-dark my-5">
				<strong>Login</strong>
			</h2>
			<div className="d-flex my-5 flex-lg-row flex-column-reverse align-items-center">
				<div className="w-75 mx-md-5 px-md-5 p-4">
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
				<h4>or</h4>
				<div className="d-flex justify-content-center w-50">
					<GoogleButton
						className="my-5"
						onClick={() =>
							window.open(
								"http://localhost:8000/api/auth/google/callback",
								"_self"
							)
						}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default connect(null, mapDispatchToProps)(Login);

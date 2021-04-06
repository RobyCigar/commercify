import { FormText, Alert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { useContext } from "react";
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux'
import axios from "axios";

import { mapStateToProps, mapDispatchToProps } from './action'

import Forms from "../../components/forms";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { UserCtx } from "../../App";

const Login = ({email, password, alert, success, handleChange, handleSubmit}) => {
	const { user, setUser } = useContext(UserCtx);

	const onSubmit = async (evt) => {
		evt.preventDefault();
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
				<strong className="h2">Login</strong>
			</h2>
			<div className="d-flex my-5 flex-lg-row flex-column-reverse align-items-center">
				<div className="w-75 px-md-5 p-4">
					<Forms
						email={true}
						password={true}
						multiple={false}
						textArea={false}
						onSubmit={handleSubmit}
						onChange={handleChange}
					/>
					<FormText color="muted">
						Don't have account? <Link to="/register">Sign up </Link>now
					</FormText>
				</div>
				<h4 className="m-4">or</h4>
				<div className="d-flex m-4 flex-column justify-content-center w-50">
					<FacebookLoginButton
						className="my-3"
						onClick={() =>
							window.open(
								"http://localhost:8000/api/auth/google/callback",
								"_self"
							)
						}
					/>
					<GoogleLoginButton
						className="my-3"
						onClick={() =>
							window.open(
								"http://localhost:8000/api/auth/google/callback",
								"_self"
							)
						}
					/>
					<GithubLoginButton
						className="my-3"
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

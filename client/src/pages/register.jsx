import { useReducer, useState, useEffect } from "react";
import {
	FormText,
	UncontrolledAlert,
	Alert,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import Forms from "../components/forms";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { register } from "./api";
import successIcon from "../assets/success.svg";
import GoogleButton from "react-google-button";
import {
	FacebookLoginButton,
	GoogleLoginButton,
} from "react-social-login-buttons";

const reducer = (state, action) => {
	switch (action.type) {
		case "email":
			return { ...state, email: action.val };
		case "firstname":
			return { ...state, firstname: action.val };
		case "lastname":
			return { ...state, lastname: action.val };
		case "fullname":
			return { ...state, fullname: action.val };
		case "password":
			return { ...state, password: action.val };
		case "password1":
			return { ...state, password1: action.val };
	}
};

const Register = (props) => {
	const [state, dispatch] = useReducer(reducer, {});
	const [alert, setAlert] = useState(false);
	const [success, setSuccess] = useState(false);
	const [modal, setModal] = useState(false);

	const onSubmit = (evt) => {
		evt.preventDefault();

		if (state.password?.val !== state.password1?.val) {
			setAlert("Password doesn't match");
		}
		register(state, setAlert, setModal);
	};

	const onChange = (evt) => {
		const target = evt.target;
		dispatch({ type: target.name, val: target.value });
	};

	const toggle = () => {
		setModal(!modal);
	};

	if (success) {
		return <Redirect to="/login" />;
	}

	return (
		<>
			<Navbar login={true} />
			{alert ? <Alert color="danger">{alert}</Alert> : null}

			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle} className="text-primary">
					Success
				</ModalHeader>
				<ModalBody>Registration success, you can login now</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={() => setSuccess(true)}>
						Ok
					</Button>{" "}
				</ModalFooter>
			</Modal>
				<h2 className="m-5 text-center text-dark">
					<strong>Register</strong>
				</h2>
			<div className="d-flex flex-column-reverse justify-content-center flex-md-row align-items-center">
				<div className="w-50 pb-5">
					<Forms
						email={true}
						firstName={true}
						lastName={true}
						password={true}
						passwordVerify={true}
						onChange={onChange}
						onSubmit={onSubmit}
					/>
					<FormText>
						Already have an account? <Link to="/login">Sign in</Link> now
					</FormText>
				</div>
				<strong className="mx-5">or</strong>
				<div className="d-flex">
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

export default Register;

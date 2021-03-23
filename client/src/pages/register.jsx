import { useReducer, useState, useEffect } from 'react';
import { FormText, UncontrolledAlert, Alert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'

import swal from '@sweetalert/with-react'
import Forms from "../components/forms";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { register } from './api'
import successIcon from '../assets/success.svg'
import GoogleButton from 'react-google-button'
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";


const reducer = (state, action) => {
	switch (action.type) {
		case "email":
			return {...state, email: action}
		case "firstname":
			return {...state, firstname: action}
		case "lastname":
			return {...state, lastname: action}
		case "fullname":
			return {...state, fullname: action}
		case "password":
			return {...state, password: action}
		case "password1":
			return {...state, password1: action}
	}
}

const Register = (props) => {
	const [state, dispatch] = useReducer(reducer, {})
	const [alert, setAlert] = useState(false)
	const [submit, setSubmit] = useState(false)
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		axios({
			method: 'get',
			url: 'http://localhost:8000/api/auth/google/callback'
		}).then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
	}, [])

	const validate = (email, password) => {
	    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    const regexPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
	    if(!regexEmail.test(String(email).toLowerCase())) {
	    console.log('here')
	    	setAlert("Email is not valid")  
	    	return false
	    }

    	if(!regexPassword.test(password)) {
    		setAlert("Password must contains, one digit from 0-9, one lowercase characters, one special character, length from 8-20 characters")
    		return false
    	}
    	setAlert("success")
    	return true
	}


	const onSubmit = (evt) => {
		evt.preventDefault()

		if(state.password.val !== state.password1.val) {
			setAlert("Password doesn't match")
		}

		const valid = validate(state.email.val, state.password.val)

		if(!valid) {
			return
		} 

		register(state)
		setSuccess(true)
	}

	const onChange = (evt) => {
		const target = evt.target;
		dispatch({type: target.name, val: target.value})
	};

	const responseGoogle = (response) => {
	  console.log(response);
	}



	return (
		<>
			<Navbar login={true}/>
				{
					alert ? 
		      <Alert  color="danger">
		        {alert}
		      </Alert>
					: null
				}

				{
					success ?
					swal(
					  <div>
					    <h3 className="text-primary">Success</h3>
					    <img style={{height: 80, margin: 'auto', marginBottom: 9, marginTop: 9}} src={successIcon} alt=""/>
					    <p>
					    	You can login now
					    </p>
					  </div>
					) : null
				}

				<div className="d-flex align-items-center">
						<div className="w-50 pb-5 px-5">
							<h2 className="my-4 mb-5">
								<strong>Register</strong>
							</h2>
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
						<strong>or</strong>
						<div className="d-flex mx-5">
							<GoogleButton className="my-5" onClick={() => window.open("http://localhost:8000/api/auth/google")}/>
						</div>
				</div>
			<Footer/>
		</>
	);
};

export default Register;

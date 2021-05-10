import { useState, useEffect } from 'react'
import { FormText, Alert, UncontrolledAlert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux'
import { useCookies } from 'react-cookie'
import { loginAction } from "redux/actions"


import Forms from "components/forms";
import Navbar from "components/navbar";
import Footer from "components/footer";
import { LOGIN_EMAIL as EMAIL, LOGIN_PASSWORD as PASSWORD} from "redux/constants"

const Login = ({email, password, alert, success, handleChange, handleSubmit, user, token, handleAlert}) => {
	const [ cookies, setCookies ] = useCookies()
	const [ visible, setVisible ] = useState(false)
	const [ auth, setAuth ] = useState(null)

	useEffect(() => {
		// store token to cookie hooks 

		if(token) {
			setCookies('token', token, { path: '/', sameSite: true})
		}
	}, [token, alert])
	
	const onDismiss = () =>  {
		setVisible(!visible)
		handleAlert()
	}

	if(cookies.token){
		return (
			<Redirect to="home"/>
		)
	}

	const links = [FacebookLoginButton, GoogleLoginButton, GithubLoginButton]

	return (
		<>
			<Navbar register={true} />
      {alert ? (
        <Alert
          style={{ position: "fixed", top: 0, width: "100vw", margin: 0 }}
          color="info"
          isOpen={true}
          toggle={onDismiss}
        >
          {alert}
        </Alert>
      ) : null}
			<h2 className="text-center text-dark my-5">
				<strong className="h2">Login</strong>
			</h2>
			<div className="d-flex my-5 flex-lg-row flex-column align-items-center">
				<div className="w-75 px-md-5 p-4">
					<Forms
						EMAIL={EMAIL}
						PASSWORD={PASSWORD}
						ONSUBMIT={handleSubmit}
						ONCHANGE={handleChange}
					/>
					<FormText color="muted">
						Don't have account? <Link to="/register">Sign up </Link>now
					</FormText>
				</div>
				<h4 className="m-4">or</h4>
				<div className="d-flex m-4 flex-column justify-content-center w-50">
					{
						links.map((Link, index) => {
							return (
								<Link
									className="my-3"
									onClick={() =>
										window.open(
											"http://localhost:8000/api/auth/google/callback",
											"_self"
										)
									}
								/>
							)
						})
					}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default connect(loginAction.state, loginAction.dispatch)(Login);

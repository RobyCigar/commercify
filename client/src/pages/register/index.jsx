import {
	FormText,
	Alert,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { registerAction } from "redux/actions";
import {
	REGISTER_EMAIL as EMAIL,
	REGISTER_FIRSTNAME as FIRSTNAME,
	REGISTER_LASTNAME as LASTNAME,
	REGISTER_PASSWORD as PASSWORD,
	REGISTER_PASSWORD_CHECK as PASSWORD_CHECK,
} from "redux/constants";
import Forms from "components/forms";
import Navbar from "components/navbar";
import Footer from "components/footer";

const Register = ({
	handleSubmit,
	handleChange,
	password,
	passwordCheck,
	alert,
	handleAlert,
}) => {
	const submit = (evt) => {
		evt.preventDefault();
		handleSubmit(password, passwordCheck);
	};
	const onDismiss = () => {
		handleAlert();
	};

	return (
		<>
			<Navbar login={true} />
			{alert ? (
				<Alert
					style={{
						position: "fixed",
						top: 0,
						width: "100vw",
						margin: 0,
					}}
					color="info"
					open={true}
					toggle={onDismiss}
				>
					{alert}
				</Alert>
			) : null}
			<h2 className="m-5 text-center text-dark">
				<strong>Register</strong>
			</h2>
			<div className="d-flex flex-column-reverse justify-content-center flex-md-row align-items-center">
				<div className="w-50 pb-5">
					<Forms
						EMAIL={EMAIL}
						FIRSTNAME={FIRSTNAME}
						LASTNAME={LASTNAME}
						PASSWORD={PASSWORD}
						PASSWORD_CHECK={PASSWORD_CHECK}
						ONCHANGE={handleChange}
						ONSUBMIT={submit}
					/>
					<FormText>
						Already have an account?{" "}
						<Link to="/login">Sign in</Link> now
					</FormText>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default connect(registerAction.state, registerAction.dispatch)(Register);

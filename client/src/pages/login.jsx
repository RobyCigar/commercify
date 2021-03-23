import { FormText } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Forms from "../components/forms";

const Login = (props) => {
	return (
		<>
			<Navbar />
			<div className="mx-5 w-50">
				<h2 className="my-5">Login</h2>
				<Forms
					email={true}
					password={true}
					multiple={false}
					textArea={false}
				/>
				<FormText color="muted">
					Don't have account? <Link to="/register">Sign up </Link>now
				</FormText>
			</div>
		</>
	);
};

export default Login;

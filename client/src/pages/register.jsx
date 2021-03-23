import Forms from "../components/forms";
import Navbar from '../components/navbar'

const Register = (props) => {
	return (
		<>
			<Navbar/>
			<div className="w-50 mx-5">
				<h2 className="my-5">Register</h2>
				<Forms email={true} firstName={true} lastName={true} password={true} />
			</div>
		</>
	);
};

export default Register;

import { useParams, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

function Oauth() {
	const [, setCookies] = useCookies();
	const { token } = useParams();

	console.log(token)
	setCookies("token", token, { secure: true, sameSite: true });

	return <Redirect to="/home" />;
}

export default Oauth;

import axios from "axios";
// const devURL = "http://localhost:8000/api";
const prodURL = "https://backend-mern-ecommerce.herokuapp.com/api";

const URL = prodURL;

export const login = async (data) => {
	return await axios({
		method: "post",
		data: data,
		url: `${URL}/auth/login`,
		headers: {
			"Access-Control-Allow-Origin": "http://localhost:3000",
		},
	})
		.then((res) => {
			const jwt = res.data.token;
			console.log("ini response", res);
			document.cookie = `token=${jwt};SameSite=None;Secure`;
			return res.data.user;
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log("Error", error.message);
			}
			console.log(error.config);
		});
};

export const register = async (data, setAlert, setSuccess) => {
	const { email, firstname, lastname, password } = data;

	await axios({
		method: "post",
		url: `${URL}/auth/register`,
		data: {
			email: email,
			firstName: firstname,
			lastName: lastname,
			password: password,
		},
	})
		.then((res) => {
			const jwt = res.data.token;
			document.cookie = `token=${jwt};`;
			setSuccess(true);
		})
		.catch(function (error) {
			if (error.response) {
				setAlert(error.response.data.error);
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log("Error", error.message);
			}
			console.log(error.config);
		});
};
import axios from "axios";
const devURL = "http://localhost:8000/api";
const URL = "https://backend-mern-ecommerce.herokuapp.com/api"

export const login = async (data, changeState, setSuccess, setUser) => {
	await axios({
		method: "post",
		url: `${URL}/auth/login`,
		data: data,
		headers: {
			'Access-Control-Allow-Origin': 'http://localhost:3000'
		}
	})
		.then((res) => {
			const jwt = res.data.token
			document.cookie = `token=${jwt};`
			setUser(res.data.user)
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				changeState(error.response.data.error);
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
			const jwt = res.data.token
			document.cookie = `token=${jwt};`
			setSuccess(true)
		})
		.catch(function (error) {
			if (error.response) {
				setAlert(error.response.data.error)
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

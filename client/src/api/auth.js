import axios from "axios";
import { URL } from "./index"

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
			return {...res.data.user, token: jwt};
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				throw  error.response.data.error;
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

	return await axios({
		method: "post",
		url: `${URL}/auth/register`,
		data: data,
	})
		.then((res) => {
			const jwt = res.data.token;
			document.cookie = `token=${jwt};`;
			console.log(res)
			return res.data.success;
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				return error.response.data.error
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log("Error", error.message);
			}
			console.log(error.config);
		});
};

import axios from "axios";
import { URL } from './index'

export const productAdd = async (data, token) => {
	return await axios({
		method: "post",
		data: data,
		url: `${URL}/product/add`,
		headers: {
			"Access-Control-Allow-Origin": "http://localhost:3000",
			"Authorization": token
		},
	})
		.then((res) => {
			const jwt = res.data.token;
			console.log("ini response", res);
			document.cookie = `token=${jwt};SameSite=None;Secure`;
			return res.data;
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
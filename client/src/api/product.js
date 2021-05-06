import axios from "axios";
import { URL } from "./index";

export const fetchProduct = async () => {
	return await axios({
		method: "get",
		url: `${URL}/product/list`,
	})
		.then((res) => {
			return res.data.products;
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

export const productAdd = async (data, token) => {
	let Data = new FormData();
	console.log('ini data', data, "product-image");

	return await axios({
		method: "post",
		data: Data,
		url: `${URL}/product/add`,
		headers: {
			Authorization: token,
			"Content-Type": "multipart/form-data",
		},
	})
		.then((res) => {
			const jwt = res.data.token;
			console.log("ini response", res);
			return res.data.message;
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				return error.response.data;
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log("Error", error.message);
			}
			console.log(error.config);
		});
};

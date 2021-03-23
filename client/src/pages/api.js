import axios from 'axios'
const URL = 'http://localhost:8000/api'

export const login = async (data) => {
	await axios({
		method: 'post',
		url: `${URL}/auth/login`,
		data: data
	})
	.then(res => {
		console.log('ini respon', res)
	})
	.catch(function (error) {
	if (error.response) {
	  console.log(error.response.data);
	  console.log(error.response.status);
	  console.log(error.response.headers);
	} else if (error.request) {
	  console.log(error.request);
	} else {
	  console.log('Error', error.message);
	}
	console.log(error.config);
	});

}

export const register = async (data) => {
	const email = data.email.val
	const firstname = data.firstname.val
	const lastname = data.lastname.val
	const password = data.password.val

	await axios({
		method: 'post',
		url: `${URL}/auth/register`,
		data: {
			email: email,
			firstName: firstname,
			lastName: lastname,
			password: password
		}
	})
	.then(res => {
		console.log('ini respon', res)
		localStorage.setItem('token', res.data.token)
	})
	.catch(function (error) {
	if (error.response) {
	  console.log(error.response.data);
	  console.log(error.response.status);
	  console.log(error.response.headers);
	} else if (error.request) {
	  console.log(error.request);
	} else {
	  console.log('Error', error.message);
	}
	console.log(error.config);
	});

}
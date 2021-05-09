import { takeEvery, call, put, select } from 'redux-saga/effects'
import { USER } from 'redux/constants'
import { LOGIN_SUBMIT, LOGIN_ALERT } from 'redux/constants'
import { login } from 'api'
 
const getStateFromStore = state => {
	const { email, password } = state.login
	return {
		email: email,
		password: password
	}
}

function* submitLogin() {
	const data = yield select(getStateFromStore)
	console.log("Ini data", data)
	try {
		const user = yield call(login, data)
		yield put({type: USER, payload: user})
	} catch (error) {
		console.log('ini err', error)
		yield put({type: LOGIN_ALERT, payload: error})
	}
}

function* watchLoginAsync() {
	yield takeEvery( LOGIN_SUBMIT, submitLogin)
}

export default watchLoginAsync;
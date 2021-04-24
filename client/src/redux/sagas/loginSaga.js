import { takeEvery, call, put, select } from 'redux-saga/effects'
import { USER } from 'redux/constants'
import { LOGIN_SUBMIT } from 'redux/constants'
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
	} catch (e) {
		console.log('ini err', e)
		yield put({type: USER, payload: null})
	}
}

function* watchLoginAsync() {
	console.log('watchLoginAsync')
	yield takeEvery( LOGIN_SUBMIT, submitLogin)
}

export default watchLoginAsync;
import { takeEvery, call, put, select } from 'redux-saga/effects'
import { USER } from '../user/constant'
import { LOGIN_SUBMIT } from './constant'
import { login } from '../api'

const getStateFromStore = state => {
	const { email, password } = state.loginReducer

	return {
		email: email,
		password: password
	}
}

export function* submitLogin() {
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

export function* watchLoginAsync() {
	yield takeEvery( LOGIN_SUBMIT, submitLogin)
}
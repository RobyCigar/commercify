import { all, call } from 'redux-saga/effects'
import { login, productAdd, user } from './sagas'

export default function* rootSaga() {
	yield all([
    call(user),
    call(productAdd),
		call(login),
	])
}
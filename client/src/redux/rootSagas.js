import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { login, productAdd } from './sagas'

export default function* rootSaga() {
	yield all([
		call(login),
    call(productAdd)
	])
}
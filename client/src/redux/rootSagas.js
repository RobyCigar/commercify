import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { login } from './sagas'

export default function* rootSaga() {
	yield all([
		call(login)
	])
}
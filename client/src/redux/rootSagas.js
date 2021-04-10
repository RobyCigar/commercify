import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import { watchLoginAsync } from '../pages/login/saga'

export default function* rootSaga() {
	yield all([
		call(watchLoginAsync)
	])
}
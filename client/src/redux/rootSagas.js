import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
	console.log("helloSaga")
}

export function* incrementAsync() {
	yield delay(1000)
	console.log('hereee')
	yield put({type: "INCREMENT"})
}

export function* watchIncrementAsync() {
	yield takeEvery("INCREMENT_ASYNC", incrementAsync)
}

export default function* rootSaga() {
	yield all([
		call(helloSaga),
		call(watchIncrementAsync)
	])
}
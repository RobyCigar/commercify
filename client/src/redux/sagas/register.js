import { takeEvery, put, call, select } from 'redux-saga/effects'
import { REGISTER_ALERT, REGISTER_SUBMIT } from 'redux/constants';
import { register } from 'api'

const getStateFromStore = state => {
	return { ...state.register };
}

function* submitProduct() {
	const data = yield select(getStateFromStore)
	try {
		const fetch = yield call(register, data)
		console.log('fetch', fetch)
		yield put({type: REGISTER_ALERT, payload: fetch})
	} catch (e) {
		console.log(e)
		yield put({type: REGISTER_ALERT, payload: "User failed to create"})
	}
}

function* watchProductAsync() {
	yield takeEvery(REGISTER_SUBMIT, submitProduct)
}

export default watchProductAsync;
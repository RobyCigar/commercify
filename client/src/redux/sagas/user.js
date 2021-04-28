import { user } from 'api'
import { select, call, takeEvery, put } from 'redux-saga/effects'
import { USER } from 'redux/constants'

const getStateFromStore = () => {
	return user.token;
}

function* fetchUser() {
  const token = yield select(getStateFromStore)
  try {
    const user = yield call(user, token)
    yield put({type: USER, payload: user})
  } catch (e) {
    console.log('ini err', e)
    yield put({type: USER})
  }
}

function* watchUserAsync() {
  yield takeEvery(USER, fetchUser)
}

export default watchUserAsync;
import { fetchUser } from 'api'
import { select, call, takeEvery, put } from 'redux-saga/effects'
import { FETCH_USER, USER } from 'redux/constants'

const getStateFromStore = ({user}) => {
	return user.token;
}

function* userSaga() {
  const token = yield select(getStateFromStore)
  console.log('token', token)
  try {
    const user = yield call(fetchUser, token)
    console.log(user)
    yield put({type: USER, payload: user})
  } catch (e) {
    console.log('ini err', e)
    yield put({type: USER})
  }
}

function* watchUserAsync() {
  yield takeEvery(FETCH_USER, userSaga)
}

export default watchUserAsync;
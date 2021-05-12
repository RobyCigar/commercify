import { select, call, takeEvery, put } from 'redux-saga/effects'
import { USER, TOKEN, FETCH_USER } from 'redux/constants'
import { fetchUser } from 'api'
 
const getStateFromStore = ({user}) => {
	return user.token;
}

function* userSaga() {
  const token = yield select(getStateFromStore)
  try {
    const user = yield call(fetchUser, token)
    yield put({type: USER, payload: user})
  } catch (e) {
    console.log('ini err', e)
    yield put({type: USER, payload: null})
  }
}

function* watchUserAsync() {
  yield takeEvery(FETCH_USER, userSaga)
}

export default watchUserAsync;
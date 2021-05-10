import { fetchUser } from 'api'
import { select, call, takeEvery, put } from 'redux-saga/effects'
import { FETCH_USER, USER, TOKEN } from 'redux/constants'

const getStateFromStore = ({user}) => {
	return user.token;
}

function* userSaga() {
  const token = yield select(getStateFromStore)
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
  yield takeEvery(TOKEN, userSaga)
}

export default watchUserAsync;
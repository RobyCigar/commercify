import { takeEvery, put, call, select } from 'redux-saga/effects'
import { productAdd } from 'api'
import { PRODUCT_ADD_SUBMIT, ALERT } from 'redux/constants'

const getStateFromStore = state => {
  return {...state.product}
}

function* submitProduct() {
  const data = yield select(getStateFromStore)
  try {
    const user = yield call(productAdd, data)
    yield put({type: ALERT, payload: user})
  } catch (e) {
    console.log('ini err', e)
    yield put({type: ALERT, payload: null})
  }
}

function* watchProductAsync() {
  console.log('dispatched')
  yield takeEvery( PRODUCT_ADD_SUBMIT, submitProduct)
}

export default watchProductAsync;
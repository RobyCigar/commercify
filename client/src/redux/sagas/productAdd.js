import { takeEvery, put, call, select } from 'redux-saga/effects'
import { productAdd } from 'api'
import { PRODUCT_ADD_SUBMIT, PRODUCT_ADD_ALERT } from 'redux/constants'

const getProductFormFromStore = state => {
  return {...state.product}
}

const getTokenFromStore = ({user}) => {
  return user.token;
}
 
function* submitProduct() {
  const data = yield select(getProductFormFromStore)
  const token = yield select(getTokenFromStore)
  try {
    const message = yield call(productAdd, data, token)
    yield put({type: PRODUCT_ADD_ALERT, payload: message})
  } catch (e) {
    console.log('ini err', e)
    yield put({type: PRODUCT_ADD_ALERT, payload: "Product failed to add"})
  }
}

function* watchProductAsync() {
  console.log('dispatched')
  yield takeEvery( PRODUCT_ADD_SUBMIT, submitProduct)
}

export default watchProductAsync;
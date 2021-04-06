import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from './rootReducers'
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware()

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

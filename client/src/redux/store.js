import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from './rootReducers'
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)

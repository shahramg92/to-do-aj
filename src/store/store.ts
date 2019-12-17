import { createStore, applyMiddleware } from 'redux'
import { State, reducer, initialState } from '../store/reducers/index';
import createSagaMiddleware from 'redux-saga';
import {getPostsSaga} from './sagas/toDoSagas';
/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(getPostsSaga);

export default store;
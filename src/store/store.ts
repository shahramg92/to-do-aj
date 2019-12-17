import { createStore, applyMiddleware } from 'redux'
import { State, reducer, initialState } from '../store/reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/toDoSagas';
import { composeWithDevTools } from 'redux-devtools-extension';
/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, initialState, composeWithDevTools(
     applyMiddleware(sagaMiddleware))
)
    

sagaMiddleware.run(rootSaga);

export default store;
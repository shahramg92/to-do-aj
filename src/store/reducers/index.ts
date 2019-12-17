import { combineReducers } from 'redux'
import * as fromTodos from './todos'
import * as toDoReducer from '../reducers/toDoReducer';

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface State {
  todos: fromTodos.State
  toDoCustom: toDoReducer.State,
}

/*
 * initialState of the app
 */
export const initialState: State = {
  todos: fromTodos.initialState,
  toDoCustom: toDoReducer.initialState,
}

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const reducer = combineReducers({
  todos: fromTodos.reducer,
  toDoCustom: toDoReducer.reducer,
})
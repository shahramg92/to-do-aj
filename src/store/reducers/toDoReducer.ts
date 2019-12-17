import * as actionTypes from '../actions/actionTypes';
import produce from "immer"; 

export interface State {
    toDoCustom: []
  }

export const initialState: State = {
    toDoCustom: [] // We don't have any todos at the start of the app
}

export function reducer(state: State = initialState, action: any) {
    switch (action.type) {
      case actionTypes.GET_POSTS_SUCCESS: {
          return state
      }
      default: return state;
    }
}
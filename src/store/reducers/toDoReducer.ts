import * as actionTypes from '../actions/actionTypes';
import produce from "immer"; 

export interface State {
    toDoCustom: [],
    title: String,
  }

export const initialState: State = {
    toDoCustom: [], // We don't have any todos at the start of the app
    title: 'Title Of Store',
  }

export function reducer(state: State = initialState, action: any) {
    switch (action.type) {
      case actionTypes.GET_POSTS_START: {

          return state;
      }
      case actionTypes.GET_POSTS_SUCCESS: {
          // console.log('state', state);
          console.log('action.payload', action.payload)

          // return {
          //   ...state,
          //   toDoCustom: action.payload
          // }

          const nextState = produce(state, draftState => {
            draftState.toDoCustom = action.payload;
            // draftState.title = 'updated saga'
        });

        return nextState;
      }
      case actionTypes.GET_POSTS_FAILED: {
        alert('get posts failed!')
      }
      default: return state;
    }
}
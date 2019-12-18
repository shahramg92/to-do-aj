import * as actionTypes from './actionTypes';

export const getPostStart = () => {
    return {
      type: actionTypes.GET_POSTS_START
    };
};

export const getPostSuccess = (response: any) => {
    return {
      type: actionTypes.GET_POSTS_SUCCESS,
      payload: response
    };
};

export const getPostFailure = () => {
  return {
    type: actionTypes.GET_POSTS_FAILED
  };
};
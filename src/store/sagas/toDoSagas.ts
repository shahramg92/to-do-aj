import axios from 'axios';
import { put, delay, takeEvery, all,call, takeLatest } from 'redux-saga/effects';
import { getPostSuccess, getPostStart } from '../actions/actionCreators';
import { GET_POSTS_START } from '../actions/actionTypes';

// export const fetchData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// function* getPostsSaga() {
//   try {
//     const data = yield call(fetchData);
//     yield put(actions.getPostSuccess(data))
    
//   } catch (error) {
//     yield put (actions.getPostFailure())
//   }
// };

// export function* asyncAddPosts() {
  //   try {
  //     console.log('attempting to get posts')
  //     const response = yield call(axios.post, "https://jsonplaceholder.typicode.com/posts", {});
  //     console.log(response)
  //   } catch (e) {
  
  //     } 
  //   }

export function* asyncGetPosts() {
  try {
    const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts?userId=1");
    // yield put({type: actions.getPostSuccess, response: response.data});
    yield put(getPostSuccess(response.data))
  } catch (e) {
      console.log(e);
    } 
}

function* watchTypeToListenFor() {
  yield takeEvery(GET_POSTS_START, asyncGetPosts)
}

export default function* rootSaga() {
  yield all([
    watchTypeToListenFor()
  ])
}
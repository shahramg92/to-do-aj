import { getPostSuccess } from './actionCreators';
import { GET_POSTS_SUCCESS } from './actionTypes';

describe('actions', () => {
    it('should fire after get_post_request action calls,', () => {
      const payload = {};
      const expectedAction = {
        type: GET_POSTS_SUCCESS,
        payload,
      }
      expect(getPostSuccess(payload)).toEqual(expectedAction)
    })
  })
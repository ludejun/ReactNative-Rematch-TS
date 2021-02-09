import request from '../utils/request';
import {apiURL, ajaxPostOptions} from '../configs/api.ts';

export const user = {
  state: {
    isAuth: false,
    userInfo: {},
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    fetchLogin(state, payload) {
      return {
        ...state,
        loginLoading: payload.loading,
        ...(payload.status === 'success'
          ? {number: state.number + payload.num}
          : null),
      };
    },
  },
};

import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      // retorna o estado anterior, e os nossos posts que está vindo do payload
      return { ...state, posts: action.payload, loading: false };
    }
    case types.POSTS_LOADING: {
      return { ...state, loading: true };
    }
  }
  return { ...state };
};

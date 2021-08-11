import * as types from './types.js';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.types.POSTS_LOADING, loading: true });

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();
  return () => dispatch({ type: types.types.POSTS_SUCCESS, payload: posts });
};

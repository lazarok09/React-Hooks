import * as types from './types.js';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POSTS_LOADING, loading: true });

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();
  // envia via payload a chave posts que como sabemos, é um array de objetos da requisição
  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};

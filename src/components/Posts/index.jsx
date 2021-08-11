import React, { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions.js';
import { PostsContext } from '../../contexts/PostsProvider/context.js';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  // eslint-disable-next-line
  const { postsState, postsDispatch } = postsContext;
  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <>
      {postsState.loading && (
        <p>
          <strong>Carregando Posts</strong>
        </p>
      )}
      {postsState.posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

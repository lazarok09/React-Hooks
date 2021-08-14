import React, { useContext, useEffect, useRef } from 'react';
import { CounterContext } from '../../contexts/CounterProvider/context.js';
import { loadPosts } from '../../contexts/PostsProvider/actions.js';
import { PostsContext } from '../../contexts/PostsProvider/context.js';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  // eslint-disable-next-line
  const { postsState, postsDispatch } = postsContext;

  // Button
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;
  // lifecycle
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
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter {counterState.counter}+
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter {counterState.counter}-
      </button>
      <h1>POSTS</h1>
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
    </div>
  );
};

import React from 'react';
import '../../styles/App.css';
import useFetch from '../Hooks/useFetch.js';

export const App = () => {
  const { isPending, error, data } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return (
    <div>
      {data.length > 0 &&
        data.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.id}</h1>;{post.title}, ID :{post.id}
              <p>{post.body}</p>
            </div>
          );
        })}
      {(isPending, error)}
    </div>
  );
};

export default App;

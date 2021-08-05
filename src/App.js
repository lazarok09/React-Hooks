import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  // states
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);
  const showDataOnConsole = () => {
    if (posts.length > 0) {
      console.log(posts[0]);
    }
  };

  return (
    <div className={'main-container'}>
      {posts.map((post) => {
        return (
          <div className={'post-card'} key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
      {showDataOnConsole()}
    </div>
  );
};

export default App;

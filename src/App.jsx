import React from 'react';
import P from 'prop-types';
import './App.css';
import { useEffect, useState, useMemo } from 'react';

const PostCard = ({ post }) => {
  console.log('Post card renderizou');
  return (
    <div className={'post-card'} key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
PostCard.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};
const App = () => {
  console.log('App renderizou');
  // states
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  /* useEffect vai executar uma vez por não ter dependencia,
   o timeOut vai ficar 2 milisegundos para executar a função e então a nossa requisição será retornada.
  Posteriormente temos uma avaliação de circuito que se não ouver peso (length) no nosso estado posts,
   vai renderizar um texto 'não existem posts'
   */
  useEffect(() => {
    setTimeout(() => {
      // fetch API
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => setPosts(response));
      // fim da fetch
    }, 2 * 1000);
  }, []);

  return (
    <div>
      <div className={'input-container'}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={'first-input'}
          name="input"
          placeholder="type somenthing"
        />
      </div>

      <div className={'main-container'}>
        {/* useMemo previne */}

        {useMemo(() => {
          return (
            posts.length > 0 &&
            posts.map((post) => {
              return <PostCard key={post.id} post={post} />;
            })
          );
        }, [posts])}
      </div>
      {/* se não houver posts */}
      {posts.length == 0 && <p>Não existem posts</p>}
    </div>
  );
};

export default App;

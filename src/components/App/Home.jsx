import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

export const Home = () => {
  // eslint-disable-next-line

  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: {
        abc: +postId,
      },
    },
  );
  useEffect(() => {
    console.log('id do post : ' + postId);
  }, [postId]);
  const handleClick = (id) => {
    setPostId(id);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((post) => (
            <div key={post.id}>
              <h1 onClick={() => handleClick(post.id)}>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <div>
            {/* handle click empty back to 'Home' because id = 0 */}
            <h1 onClick={() => handleClick('')}>{result.title}</h1>
            <p>{result.body}</p>
          </div>
        )}
      </div>
    );
  }

  // jsx
  return <h1>Hi there!</h1>;
};

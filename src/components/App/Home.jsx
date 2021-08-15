import { useCallback, useEffect, useState } from 'react';
import { useAsync } from '../../hooks/useAsync';

// async funciton fetchData does a fetch and return a json object/array
export const fetchData = async () => {
  const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const postJSON = await postRaw.json();

  return postJSON;
};

export const Home = () => {
  /* our useAsync custom hook return 1 function and 3 states.
   We can pass to useAsync a boolean as second argument
   That will tell to the hook if he have to execute or not */

  const [reFetchData, result, error, status] = useAsync(fetchData, false);

  // call the fetchData;
  useEffect(() => {
    reFetchData();
  }, [reFetchData]);

  /* Based on status code from useAsync, we can render different HTML results */
  if (status === 'idle') {
    return <pre> Nada executando </pre>;
  }
  if (status === 'pending') {
    return <pre>Loading...</pre>;
  }
  if (status === 'error') {
    return <pre>error : {error.message}</pre>;
  }
  /* Here the response status is settled and we can return the object on screen with JSON JS native api */
  if (status === 'fulfilled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
  /* otherwise everything comes wrong, do that :> */
  return 'Hello World from Brazil';
};
export default Home;

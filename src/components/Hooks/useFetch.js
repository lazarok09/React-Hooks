import { useEffect, useState } from 'react';

const useFetch = (url) => {
  // eslint-disable-next-line
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [isPending, setIsPending] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('cannot fetch data');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  // the three values we will need to acess out side the hook
  return { isPending, error, data };
};

export default useFetch;

import { useCallback, useEffect, useState } from 'react';

export const useAsync = (asyncFunction, shouldRun) => {
  /* a state with 3 states */
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    /* cleaning the states before do another promise */
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    /* execute the asyncFunction, capiture the response, do all the sets from respective states */
    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'fulfilled',
        });
      })
      .catch((e) => {
        setState({
          result: null,
          error: e,
          status: 'error',
        });
      });

    /* useCallBack watch the async function, if changes, re-execute */
  }, [asyncFunction]);

  /* shouldRun is a boolean that determines if the async function will be executed */
  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  /* the values returned on execute a useAsync custom hook */
  return [run, state.result, state.error, state.status];
};

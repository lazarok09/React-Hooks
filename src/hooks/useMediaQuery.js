import { useEffect, useState } from 'react';

export const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState();

  useEffect(() => {
    // isMounted - flag that controls the willUnMount on return from useEffect
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);
    // handleChange - function that set the value from matchMedia.matches into our state 'match'
    const handleChange = () => {
      if (!isMounted) {
        return;
      }
      setMatch(Boolean(matchMedia.matches));
    };
    // go to the browser and add a listener change for de screen.
    matchMedia.addEventListener('change', handleChange);
    // can change too here the matches value from matchMedia
    setMatch(!!matchMedia.matches);

    // function cleanup
    return () => {
      // isMounted false make the handleChange don't execute anymore
      isMounted = false;
      // remove the event and let the component be destroyed
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

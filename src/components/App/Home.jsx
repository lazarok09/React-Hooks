import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles2 from './styles2.module.css';

import P from 'prop-types';

export const Home = ({ text }) => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };
  if (counter > 5) {
    throw new Error('oops, invalid operation :(');
  }
  return (
    <div className={styles2.body}>
      <buton className={styles2.button} onClick={handleClick}>
        click for counter
      </buton>
      <p className={styles2.paragraph_counter}>
        {text}: {counter}
      </p>
    </div>
  );
};
export default Home;
Home.propTypes = {
  text: P.string.isRequired,
  props: P.node,
};

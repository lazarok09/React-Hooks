import React, { useState } from 'react';
import '../../styles/App.css';
import { Button } from '../Button';
import { AppContext } from '../contexts/App';
import { Div } from '../Div';

const App = () => {
  // eslint-disable-next-line
  const [counter, setCounter] = useState(0);

  return (
    <AppContext>
      <Div />;
      <Button />
    </AppContext>
  );
};
export default App;

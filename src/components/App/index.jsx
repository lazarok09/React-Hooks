import React from 'react';
import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';

import { Button } from '../Button';
export const App = () => {
  return (
    <PostsProvider>
      <CounterProvider>
        <Button />
      </CounterProvider>
    </PostsProvider>
  );
};
export default App;

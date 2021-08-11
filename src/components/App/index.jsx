import React from 'react';
import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';

import { Posts } from '../Posts';

export const App = () => {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
};
export default App;

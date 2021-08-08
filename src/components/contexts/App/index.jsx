import { createContext } from 'react';
import { globalAlbumState } from './data.js';
export const GlobalContext = createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  return (
    <GlobalContext.Provider value={globalAlbumState}>
      {children}
    </GlobalContext.Provider>
  );
};

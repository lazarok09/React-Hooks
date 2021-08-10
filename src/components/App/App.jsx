import { createContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import React, { useContext } from 'react';
import '../../styles/App.css';
// data.js
export const globalState = {
  title: 'lorem impsum',
  body: 'lorem body',
};
// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  // função para mudar titulo
  const changeTitle = (payload) => {
    return dispatch({ type: actions.CHANGE_TITLE, payload });
  };
  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

// H1 .jsx
export const H1 = () => {
  const context = useContext(Context);
  return <h1>{context.state.title}</h1>;
};
// button .jsx
export const Button = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  return (
    <>
      <input ref={inputRef} placeholder={'digite aqui'}></input>
      <button onClick={() => context.changeTitle(inputRef.current.value)}>
        muda titulo
      </button>
    </>
  );
};
// prop types do App Context
AppContext.propTypes = {
  children: P.node,
};
// App .jsx
const App = () => {
  return (
    <AppContext>
      <H1 />
      <Button />
    </AppContext>
  );
};
export default App;

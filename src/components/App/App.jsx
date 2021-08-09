import React, { useReducer } from 'react';
import '../../styles/App.css';

// eslint-disable-next-line
export const complextState = {
  title: 'La Vie en Rose',
  body: 'A Edith Piaf álbum, by 60s golden year!',
  src: 'https://http2.mlstatic.com/D_NQ_NP_876528-MLB42441448548_072020-O.jpg',
};
const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'muda titulo': {
        console.log('mudou o titulo');
        return { ...state, title: 'Mon Dieu' };
      }
      case 'inverter': {
        console.log('inverteu');
        const { body } = state;
        return { ...state, body: body.split('').reverse().join('') };
      }
    }
    return { ...state };
  };
  /* a função useReducer pede uma função de reducer, e o estado. Recebe o estado e uma função de dispatch,
   que vai indicar um objeto com ações denominadas type que irão fazer coisas. */
  const [state, dispatch] = useReducer(reducer, complextState);

  return (
    <div>
      <h1>{state.title}</h1>
      <p>{state.body}</p>
      <img
        style={{ width: '200px', border: '1px solid red' }}
        src={state.src}
        alt={state.title}
      />
      <br></br>
      <button
        type="button"
        style={{ width: '13rem', background: '#c5c5c5' }}
        onClick={() => dispatch({ type: 'muda titulo' })}
      >
        Clique para mudar o titulo
      </button>
      <button
        type="button"
        style={{ width: '13rem', background: 'red', color: 'white' }}
        onClick={() => dispatch({ type: 'inverter' })}
      >
        Mudar a apresentação do parágrafo
      </button>
    </div>
  );
};
export default App;

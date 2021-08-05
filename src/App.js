import P from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';
// salva em memória do React o componente botão
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou');
  return (
    <button className={'button'} onClick={() => incrementButton(100)}>
      +
    </button>
  );
});
// define as tipagens
Button.propTypes = {
  incrementButton: P.func,
};
export default function App() {
  // botao
  const [counter, setCounter] = useState(0);
  // salva a função em callback para não re-renderizar quando o estado do componente App, (counter) mudar.
  const incrementFunction = useCallback(
    // a funçao setCounter usa o callback pra pegar o estado anterior do estado (counter)
    (number) => {
      setCounter((prevCounter) => prevCounter + number);
    },
    [],
  );

  console.log('Pai, renderizou');
  return (
    // component didUpdate
    <div className={'App'}>
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementFunction} />
    </div>
  );
}

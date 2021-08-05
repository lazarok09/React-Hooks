import './App.css';
import { useState, useEffect } from 'react';

const showClicks = () => {
  console.log('h1 clicado');
};
function App() {
  // estados
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  // componente didMount e o WillUnMount no return
  useEffect(() => {
    document.querySelector('h2')?.addEventListener('click', showClicks);
    console.log('componente montado');
    return () => {
      document.querySelector('h2')?.removeEventListener('click', showClicks);
    };
  }, []);
  // component didUpdate
  useEffect(() => {
    console.log('algum componente atualizou');
  });

  return (
    // component didUpdate
    <div className={'App'}>
      <h1>Abre o console</h1>
      {/* >Mensagem do didmount */}
      <h2>ComponentDidMount ? : </h2>
      <h1>Contador: {counter}</h1>
      <button className={'button'} type="button" onClick={handleClick}>
        Counter
      </button>
      <ul>
        {' '}
        <h1>Ao clicar no botão counter o componente deverá : </h1>
        <li>componente ser atualizado</li>
      </ul>
      <p className={'description'}>Altere algum valor aqui e veja o componente sendo montado novamente no console : </p>
    </div>
  );
}

export default App;

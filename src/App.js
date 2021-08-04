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
      <p>Contador: {counter}</p>
      <button type="button" onClick={handleClick}>
        Counter
      </button>
      <p>Altere algum valor aqui e veja o componente sendo montado novamente no console : </p>
    </div>
  );
}

export default App;

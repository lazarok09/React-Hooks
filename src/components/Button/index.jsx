import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { incrementCounter } from '../../contexts/CounterProvider/actions';
export const Button = () => {
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;
  console.log(counterContext);
  return (
    <>
      <h1>{counterState.counter}</h1>
      <button onClick={incrementCounter(counterDispatch)}>Increment</button>
    </>
  );
};

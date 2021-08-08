import { useContext } from 'react';
import { GlobalContext } from '../contexts/App';
import './style.css';
// eslint-disable-next-line
export const Div = () => {
  const context = useContext(GlobalContext);
  const { title, body, src } = context;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <img className={'image'} src={src} alt="edith piaf album" />
    </div>
  );
};

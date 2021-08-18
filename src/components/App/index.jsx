import { Home } from './Home';
import { ErrorBoundary } from './ErrorBoundary';
import styles2 from './styles2.module.css';

function App() {
  return (
    <main className={styles2.main}>
      <ErrorBoundary>
        <Home text="counter 1" />
      </ErrorBoundary>
      <Home text="counter 2" />
      <p>
        Clique no X que só aparece em ambiente de produção, e verá a
        renderização do Boundary do primeiro counter. Caso dê errado no segundo
        counter que não tem tratamento pra erro com boundary, irá mostrar apenas
        um frame em branco ao clicar no X da exceção, no canto superior direito
      </p>
    </main>
  );
}
export default App;

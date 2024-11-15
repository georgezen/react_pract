import { useContext } from 'react';
import { Counter } from '../CounterContext/Counter';


const PageCounter = () => {

  const { calculando,contador } = useContext(Counter);

    return (
      <>
          <h1>PageCounter {contador}</h1>      
          <button type="button" className="btn btn-success" onClick={() => calculando('+')}>+1</button>
          <button type="button" className="btn btn-primary" onClick={() => calculando('-')}>-1</button>
          <button type="button" className="btn btn-danger" onClick={() => calculando('reset')}>Reseteo</button>
      </>
    )
  }
  
  export default PageCounter
  
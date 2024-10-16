import useCounter from '../UseCounterCustom/useCounter';
import MemoHook from './MemoHook';
import Titulillo from './Titulillo';
import {useState} from 'react';

const Memorando = () => {
    const {counter, aumento,decremento,reset} = useCounter(1);
    const [show, setShow] = useState(true);



  return (
    <>
    <span>El hook de use memo sirve para evitar renderizado de componentes hijos, parecido al useEffect </span>
      <Titulillo counter= {counter}/>

      <button className="btn btn-success" onClick={ () => aumento()}>+1</button>

      <button
      className='btn btn-primary'
        onClick={ () => setShow(!show)}
      >
        Show/hide {JSON.stringify(show)}
      </button>

      <MemoHook />
    </>
  )
}

export default Memorando

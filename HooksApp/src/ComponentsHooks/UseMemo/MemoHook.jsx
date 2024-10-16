import useCounter from '../UseCounterCustom/useCounter';
import {useState,useMemo} from 'react';

const iterandoChido = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('Ahi vamos');
    }

    return `${iteraciones} iteraciones realizadas`;
}

const MemoHook = () => {
    const {counter, aumento} = useCounter(20000);
    const [show, setShow] = useState(true);

    const memoIterandoChido = useMemo(() => iterandoChido(counter), [counter]);



  return (
    <>
      <h1>memoHook {counter}</h1>
        <hr />
        <p>{memoIterandoChido}</p>
      

      <button className="btn btn-success" onClick={ () => aumento()}>+1</button>

      <button
      className='btn btn-primary'
        onClick={ () => setShow(!show)}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default MemoHook

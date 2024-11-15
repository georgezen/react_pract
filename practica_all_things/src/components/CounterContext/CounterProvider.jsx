
import { Counter } from './Counter';
import useCounterContext from './useCounterContext';

export const CounterProvider = ({children}) => {

const {contador,calculando} = useCounterContext(5);

  return (
    <Counter.Provider value={{calculando,contador}}>
      {children}
    </Counter.Provider>
  )
}
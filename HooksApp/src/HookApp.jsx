import Counter from './ComponentsHooks/UseCounterEffect/Counter';
import UseCounter from './ComponentsHooks/UseCounterCustom/UseCounter';
import FormSimple from './ComponentsHooks/UseForm/FormSimple';
import Calculator from './ComponentsHooks/UseCalculator/Calculator';
import FecthCustom from './ComponentsHooks/UseFetch/FecthCustom';
import GetById from './ComponentsHooks/UseFetch2/GetById';
import UseRef from './ComponentsHooks/UseRefFirst/UseRef';
import Memorando from './ComponentsHooks/UseMemo/Memorando';
import './ComponentsHooks/UseReducer/userReducer';
import Reducer from './ComponentsHooks/UseReducer/Reducer';
import ListaReducer from './ComponentsHooks/UseReducer2/ListaReducer';

const HookApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      {/* <Counter /> */}
      {/* <hr />
      <UseCounter />
      <hr />
      <FormSimple />
      <hr />
      <Calculator /> */}
      <hr />
      <ListaReducer />
      {/* <hr />
      <UseRef /> */}
      <hr />
      <Reducer />
      
      
      
      
    </>
  )
}

export default HookApp

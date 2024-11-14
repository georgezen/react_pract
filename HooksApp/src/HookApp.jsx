/*import Counter from './ComponentsHooks/UseCounterEffect/Counter';
import UseCounter from './ComponentsHooks/UseCounterCustom/UseCounter';
import FormSimple from './ComponentsHooks/UseForm/FormSimple';
import Calculator from './ComponentsHooks/UseCalculator/Calculator';
import FecthCustom from './ComponentsHooks/UseFetch/FecthCustom';
import GetById from './ComponentsHooks/UseFetch2/GetById';
import UseRef from './ComponentsHooks/UseRefFirst/UseRef';
import Memorando from './ComponentsHooks/UseMemo/Memorando';
import './ComponentsHooks/UseReducer/userReducer';
import Reducer from './ComponentsHooks/UseReducer/Reducer';
import Reducer3 from './ComponentsHooks/UseReducer3/Reducer3';
import ListaReducer from './ComponentsHooks/UseReducer2/ListaReducer';*/
import UseContext from './ComponentsHooks/UseContext/ContextApp';
import { BrowserRouter } from "react-router-dom";

const HookApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <hr />
      <BrowserRouter>
        <UseContext />
      </BrowserRouter>
    </>
  )
}

export default HookApp

import Counter from './ComponentsHooks/UseCounterEffect/Counter';
import UseCounter from './ComponentsHooks/UseCounterCustom/UseCounter';
import FormSimple from './ComponentsHooks/UseForm/FormSimple';
import Calculator from './ComponentsHooks/UseCalculator/Calculator';
import FecthCustom from './ComponentsHooks/UseFetch/FecthCustom';

const HookApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      {/* <Counter /> */}
      <hr />
      <UseCounter />
      <hr />
      <FormSimple />
      <hr />
      <Calculator />
      <hr />
      <FecthCustom />
      
    </>
  )
}

export default HookApp

import Counter from './ComponentsHooks/UseCounterEffect/Counter';
import UseCounter from './ComponentsHooks/UseCounterCustom/UseCounter';
import FormSimple from './ComponentsHooks/UseForm/FormSimple';
import Calculator from './ComponentsHooks/UseCalculator/Calculator';
import FecthCustom from './ComponentsHooks/UseFetch/FecthCustom';
import GetById from './ComponentsHooks/UseFetch2/GetById';
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
      <hr />
      <GetById />
      
    </>
  )
}

export default HookApp

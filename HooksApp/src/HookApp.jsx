import UseStateComp from './ComponentsHooks/UseStateComp';
import CounterWithCustomHook from './ComponentsHooks/CounterWithCustomHook';
import UseEffectWithCustomHook from './ComponentsHooks/CustomHookUseEfect/UseEffectWithCustomHook';
import TestApiCustomHook from './ComponentsHooks/TestApi/TestApiCustomHook';

const HookApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <UseStateComp />
      <hr />
      {/* <h2>Counter con un custom hook</h2>
      <CounterWithCustomHook/> */}
      <h2>Insertando contacto a api</h2>
      <TestApiCustomHook />
      <hr />
      <h2>custom hook con useEfect</h2>
      <UseEffectWithCustomHook/>
    </>
  )
}

export default HookApp

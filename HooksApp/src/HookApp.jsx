import UseStateComp from './ComponentsHooks/UseStateComp';
import CounterWithCustomHook from './ComponentsHooks/CounterWithCustomHook';
import UseEffectWithCustomHook from './ComponentsHooks/CustomHookUseEfect/UseEffectWithCustomHook';


const HookApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <UseStateComp />
      <hr />
      {/* <h2>Counter con un custom hook</h2>
      <CounterWithCustomHook/> */}


      <h2>custom hook con useEfect</h2>
      <UseEffectWithCustomHook/>
    </>
  )
}

export default HookApp

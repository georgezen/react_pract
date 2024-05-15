import UseStateComp from './ComponentsHooks/UseStateComp';
import CounterWithCustomHook from './ComponentsHooks/CounterWithCustomHook';


const HookApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <UseStateComp />
      <hr />
      <h2>Counter con un custom hook</h2>
      <CounterWithCustomHook/>
    </>
  )
}

export default HookApp

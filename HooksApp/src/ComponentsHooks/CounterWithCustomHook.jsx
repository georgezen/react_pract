import useCounter from "../CustomHooks/useCounter";

const CounterWithCustomHook = () => {

  const {counter,increment,decrement,reset} = useCounter();
  return (
    <>
      <h1>Valor {counter}</h1>

      <button className='btn btn-success' onClick={() => increment(2)}>+1</button>
        <button className='btn btn-danger' onClick={() => decrement(3)}>-1</button>
        <button className='btn btn-primary' onClick={() => reset()}>reset</button>
    </>
  )
}

export default CounterWithCustomHook;

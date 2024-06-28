import useCounter from "./useCounter";

const UseCounter = () => {
    const {counter, aumento,decremento,reset} = useCounter(10);

  return (
    <>
     <h1>UseCounter {counter}</h1> 


     <button className="btn btn-success" onClick={ () => aumento()}>+1</button>
     <button className="btn btn-primary" onClick={ () => reset()}>Reseteo</button>
      <button className="btn btn-danger" onClick={ () => decremento()}>-1</button>
    </>
  )
}

export default UseCounter

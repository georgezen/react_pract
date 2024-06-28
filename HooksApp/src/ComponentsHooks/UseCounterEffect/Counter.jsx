import { useState } from "react"



const Counter = () => {

    const [counter, setCounter] = useState({
        contador1: 10,
        contador2: 20,
        contador3: 30
    });

    const { contador1, contador2,contador3 } = counter;

    const aumento = () => {
        setCounter({
            ...counter,
            contador1: contador1 + 1
        });
    }

  return (
    <>
      <h1>Contando {contador1}</h1>
      <h1>Contando {contador2}</h1>
      <h1>Contando {contador3}</h1>

      <button className="btn btn-success" onClick={ () => aumento()}>+1</button>
      <button className="btn btn-danger">-1</button>
    </>
  )
}

export default Counter

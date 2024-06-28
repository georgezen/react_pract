import { useState } from "react"


const useCounter = (valor) => {

    const [counter, setCounter] = useState(valor);

    const aumento = () => {
        setCounter(counter + 1);
    }

    const decremento = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(valor);
    }



  return {
    aumento,
    decremento,
    reset,
    counter
  }
}

export default useCounter

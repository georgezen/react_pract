import { useState } from "react"



const useCounter = (value = 10) => {

    const [counter, setCounter] = useState(value);

    const increment = (valor) => {
        setCounter(counter + valor);
    }

    const decrement = (valor) => {
        setCounter(counter - valor);
    }

    const reset = () => {
        setCounter(value);
    }




  return {
    counter,
    increment,
    decrement,
    reset
  }
}

export default useCounter

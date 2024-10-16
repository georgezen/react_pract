import { useState } from "react";


const useCounter = (valor) => {

    const [counter, setCounter] = useState(valor);

    const aumento = () => {
      if (counter > 100000) return;
        setCounter(counter + 1);
    }

    const decremento = () => {
      if (counter <= 1) return;
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

import { useState } from 'react';

const useCounterContext = (valor) => {
    const [contador,setContador] = useState(valor);


    const calculando = (operador) => {
      if (operador === '+') {
        if (contador >= 10) return;
        setContador(contador + 1);
      }

      if (operador === '-') {
        if (contador < 1) return;
        setContador(contador - 1);
      }

      if (operador === 'reset') {
        setContador(valor);
      }
    }

  return {
    contador,
    calculando

  }
}

export default useCounterContext

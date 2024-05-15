import {useState} from 'react';

const UseStateComp = () => {

   const [counter, setCounter] = useState({
        contador1: 10,
        contador2: 20,
        contador3: 30
   }); 

   const {contador1, contador2, contador3} = counter;

   console.log(counter);

   const handleAdd = (valor) => {

    if (valor === "mas") {
      setCounter({
        ...counter,/* con esto se mantiene el estado de los otros contadores y solo se modifica el que se esta cambiando es el
        operador spread*/
        contador1: contador1 + 1,
        
   });
    }

    if (valor === "menos") {
        setCounter(counter - 1);
      }

      if (valor === "reset") {
        setCounter({
          contador1: 10,
          contador2: 20,
          contador3: 30
     });
      }

   }

  return (
    <>
        <h1>Contador con el useState: {contador1}</h1>
        <h1>Contador con el useState 2: {contador2}</h1>
        <h1>Contador con el useState 3: {contador3}</h1>
        <hr />
        <button className='btn btn-success' onClick={() => handleAdd("mas")}>+1</button>
        <button className='btn btn-danger' onClick={() => handleAdd("menos")}>-1</button>
        <button className='btn btn-primary' onClick={() => handleAdd("reset")}>reset</button>
      
    </>
  )
}

export default UseStateComp

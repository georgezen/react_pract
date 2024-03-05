import { useState } from 'react';
import CajaTexto from './CajaTexto';




const ListaTexto = () => {

    const [valores, setValores] = useState(['superman']);

    const addValor = (valor) => {
        
        console.log(valor);

        if (valores.includes(valor)) return;
        setValores([...valores, valor]);
    }

   

  return (
    <>
        <h1>Lista de texto</h1> 
        <CajaTexto onAddValor={(e) => addValor(e)} />
        <li>
          {
            valores.map( (valor) => {
              return <ul key={valor}>{valor}</ul>
            })
          }
        </li>
        
    </>
  )
}


export default ListaTexto

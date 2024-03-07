import { useState } from 'react';
import CajaTexto from './CajaTexto';
import ItemTexto from './ItemTexto';




const ListaTexto = () => {

  const [formData, setFormData] = useState([{
    nombre: 'superman',
    apellidos: 'hernandez'
  }]
  );

  const addValor = (valor) => {

    console.log(valor);
    if (formData.some(v => v.nombre === valor.nombre && v.apellidos === valor.apellidos)) return;
    setFormData([...formData, valor]);

    // if (formData.includes(valor)) return;
    // setFormData([...formData, valor]);
  }

  const removeValor = (valor) => {
    setFormData(formData.filter(v => v !== valor));
  }



  return (
    <>
      <h1>Lista de texto</h1>
      <CajaTexto onAddValor={(e) => addValor(e)} />
      <ul>
        {
          formData.map((valor,index) => {
            return (
              <ItemTexto key={index} valor={valor} removeValor={removeValor} />
            )
          })
        }
      </ul>

    </>
  )
}


export default ListaTexto

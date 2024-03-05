import { useState } from 'react';


const CajaTexto = ({onAddValor}) => {

    const [inputNombre, setInputNombre] = useState('');

    const changeValue = (e) => {
        console.log(inputNombre);
        setInputNombre(e.target.value);
        if (inputNombre.length === 10) {
            setInputNombre('');
        }
    }

    const submitValue = (e) => {
        e.preventDefault();
        addValueEnter();
     
    }

    const clickValue = (e) => {
        e.preventDefault();
        addValueEnter();
     
    }

    const addValueEnter = () => {
        if (inputNombre.trim().length <= 1) return;
        onAddValor(inputNombre.trim());
        setInputNombre('');
      }


  return (
    <>
      <form  onSubmit={ submitValue}>
            <label htmlFor="">Nombre</label>
            <input type="text" name="nombre" id="nombre" value={inputNombre} onChange={ changeValue }/>
        </form>
            <input type="submit" onClick={ clickValue }  value="Enviar" />
    </>
  )
}

export default CajaTexto

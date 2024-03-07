import { useState } from 'react';


const CajaTexto = ({onAddValor}) => {

    const [formValues, setFormValues] = useState({
        nombre: '',
        apellidos:''
    });

    const changeValue = (e) => {
        const { name,value } = e.target;
        console.log(value);

        setFormValues({
            ...formValues,
            [name]: value
        });
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
        const { nombre, apellidos } = formValues;
        if (nombre.trim().length <= 1 || apellidos.trim().length <= 1) return;
        onAddValor(formValues);
        setFormValues({
            nombre: '',
            apellidos:''
        });
      }


  return (
    <>
      <form  onSubmit={ submitValue}>
            <label htmlFor="">Nombre</label>
            <input type="text" name="nombre" id="nombre" value={formValues.nombre} onChange={ changeValue }/>
            <label htmlFor="">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" value={formValues.apellidos} onChange={ changeValue }/>
            <input type="submit" onClick={ clickValue }  value="Enviar" />
        </form>
    </>
  )
}

export default CajaTexto

import { useState } from "react";

const Formulario = ({onAddContacto}) => {

    // Inicializamos el estado del formulario con un objeto vacío
    const [form, setForm] = useState({
        nombre: '',
        telefono: '',
        correo: ''
    });

    // Esta función se llama cada vez que cambia el valor de un campo del formulario
    const handleChange = ({target}) => {
        // Actualizamos el estado del formulario con el nuevo valor del campo
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    // Esta función se llama cuando se envía el formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Llamamos a la función onAddContacto con el estado del formulario como argumento
        onAddContacto(form);
        
        // Restablecemos el estado del formulario a su estado inicial
        setForm({
            nombre: '',
            telefono: '',
            correo: ''
        });
    }

  return (
    <>
        <form onSubmit={ handleSubmit }>
            {/* Cada campo del formulario tiene un manejador de eventos onChange que llama a la función handleChange cuando cambia su valor */}
            <input type="text" name="nombre" id="nombre" placeholder='nombre' onChange={handleChange} value={form.nombre}/>    

            <input type="number" name="telefono" id="telefono" placeholder='telefono' onChange={handleChange} value={form.telefono}/>    

            <input type="email" name="correo" id="correo" placeholder='correo' onChange={handleChange} value={form.correo}/>    
            
            <input type="submit" value="Submit" />
        </form> 
            
    </>
  )
}

export default Formulario
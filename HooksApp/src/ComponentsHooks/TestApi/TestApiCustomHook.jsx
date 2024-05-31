import { useState } from "react";
import Formulario from "./Formulario";
import {validacion,sendData}  from "./validarForm";

/**
 * Hook personalizado para agregar contactos
 */
const TestApiCustomHook = () => {

  // Inicializamos el estado de los contactos con un array vacío
  const [contactos, setContactos] = useState([]);

  const addContacto = (contacto) => {

    // Validamos que el formulario no esté vacío y que el nombre sea único
    const estado = validacion(contacto,contactos);

    if(estado) return;

    saveContact(contacto);   
    
    // Si la validación es exitosa, agregamos el nuevo contacto al estado
    setContactos([
        ...contactos,
        contacto
    ]);
  }

  const saveContact = async (contacto) => {
    // Aquí iría el código para guardar el contacto en la API
     const estado = sendData(contacto);
    // if(!estado) return;
    
    estado.then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    
}

  return (
    <>
        {/* se pasa la función addContacto como prop a Formulario para que pueda ser llamada cuando se envíe el formulario */}
        <Formulario onAddContacto= {addContacto} />
        <ul>
            {/*Se mapea el array de contactos a elementos li */}
            {
                contactos.map(({nombre,telefono,correo}) => (
                    <li key={nombre}>{nombre} - {telefono} - {correo}</li>
                ))
            }
        </ul>
    </>
  )
}

export default TestApiCustomHook
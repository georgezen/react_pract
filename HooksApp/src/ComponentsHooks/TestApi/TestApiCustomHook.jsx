import { useState } from "react";
import Formulario from "./Formulario";
import validacion  from "./validarForm";

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
    
    // Si la validación es exitosa, agregamos el nuevo contacto al estado
    setContactos([
        ...contactos,
        contacto
    ]);
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
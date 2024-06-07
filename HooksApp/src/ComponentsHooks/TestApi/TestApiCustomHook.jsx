import React, { useState, useEffect } from 'react';
import Formulario from "./Formulario";
import { validacion, sendData, sendUpdateData, getData,deleteData } from "./validarForm";
import './Formulario.css'; // Importa el archivo CSS
import {ContactTable} from './ContactTable';
import {useContacts} from './useContacts';


const TestApiCustomHook = () => {
  const itemsPerPage = 7; // Define cuántos contactos quieres mostrar por página
  const {
    contactos,
    contactoSeleccionado,
    currentItems,
    addContacto,
    deleteContact,
    seleccionarContacto,
    handleClick,
    currentPage
  } = useContacts(itemsPerPage);

  
  return (
    <>
      <Formulario onAddContacto={addContacto} onContacto={contactoSeleccionado} />

      
        <ContactTable 
        currentItems={currentItems}
        seleccionarContacto={seleccionarContacto}
        deleteContact={deleteContact}
        itemsPerPage={itemsPerPage}
        totalItems={contactos.length}
        currentPage={currentPage}
        handleClick={handleClick}
      />
        

    </>
  )
}

export default TestApiCustomHook
import { useState } from 'react';
import Formulario from "./Formulario";
import './Formulario.css';
import {ContactTable} from './ContactTable';
import {useContacts} from './useContacts';


const TestApiCustomHook = () => {
  const itemsPerPage = 7; // Define cuántos contactos quieres mostrar por página
  const {
    contactoSeleccionado,
    addContacto,
    deleteContact,
    seleccionarContacto,
    handleClick,
    currentPage,
    filteredContacts,
    filter,
    setFilter,
    currentItems
  } = useContacts(itemsPerPage);

  
  
  return (
    <>
      <Formulario onAddContacto={addContacto} onContacto={contactoSeleccionado} />
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-3 mb-4">
      <input 
        type="text" 
        placeholder="Filtrar por nombre o correo..." 
        value={filter} 
        className='form-control'
        onChange={e => setFilter(e.target.value)} 
      />

        </div>
      </div>
      
        <ContactTable 
        currentItems={currentItems}
        seleccionarContacto={seleccionarContacto}
        deleteContact={deleteContact}
        itemsPerPage={itemsPerPage}
        totalItems={filteredContacts.length}
        currentPage={currentPage}
        handleClick={handleClick}
      />
        

    </>
  )
}

export default TestApiCustomHook
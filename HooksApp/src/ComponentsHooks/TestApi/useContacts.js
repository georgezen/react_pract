import { useState, useEffect } from 'react';
import { validacion, sendData, sendUpdateData, getData, deleteData } from "./validarForm";

export const useContacts = (itemsPerPage) => {
  const [contactos, setContactos] = useState([]);
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const renderContacts = async () => {
    const data = await getData();
    setContactos(data);
  }

  useEffect(() => {
    renderContacts();
  }, []);

  const addContacto = async (contacto) => {
    const estado = validacion(contacto);
    if (estado) return;
    if (contacto.id_contacto) {
      await saveUpdateContact(contacto);
    } else {
      await saveContact(contacto);
    }
    renderContacts();
  }

  const saveContact = async (contacto) => {
    const save = sendData(contacto);
    save.then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  const saveUpdateContact = async (contacto) => {
    const update = sendUpdateData(contacto);
    update.then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  const deleteContact = (id_contacto) => {
    const deleteRes = deleteData(id_contacto);
    deleteRes.then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    renderContacts();
  }

  const seleccionarContacto = (correo) => {
    const contacto = contactos.find(c => c.correo === correo);
    setContactoSeleccionado(contacto);
  }

  // Calcular el índice del primer y último elemento en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Obtener los elementos para la página actual
  const currentItems = contactos.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  }

  return {
    contactos,
    contactoSeleccionado,
    currentItems,
    addContacto,
    deleteContact,
    seleccionarContacto,
    handleClick,
    currentPage
  }
}
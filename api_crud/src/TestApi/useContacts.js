import { useState, useEffect } from 'react';
import { validacion, sendData, sendUpdateData, getData, deleteData } from "./validarForm";
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

export const useContacts = (itemsPerPage) => {
  const [contactos, setContactos] = useState([]);
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  let timeShow = 3000;

  const renderContacts = async () => {
    const data = await getData();
    setContactos(data);
  }

  useEffect(() => {
    renderContacts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    // Verifica si la página actual es mayor que el número total de páginas después de actualizar contactos
    const totalPages = Math.ceil(contactos.length / itemsPerPage);
    if (currentPage > totalPages) {
      // Si es así, restablece la página actual a la última página
      setCurrentPage(totalPages > 0 ? totalPages : 1);
    }
  }, [contactos]);

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
      .then(data => {
        console.log(data)
        toastr.success(data.message, 'Éxito', { timeOut: timeShow });
      })
      .catch(error => console.error('Error:', error));
  }

  const saveUpdateContact = async (contacto) => {
    const update = sendUpdateData(contacto);
    update.then(res => res.json())
      .then(data => {
        toastr.success(data.message, 'Éxito', { timeOut: timeShow });
      })
      .catch(error => console.error('Error:', error));
  }

  const deleteContact = (id_contacto) => {
    const deleteRes = deleteData(id_contacto);
    deleteRes.then(res => res.json())
      .then(data => {
        toastr.success(data.message, 'Éxito', { timeOut: timeShow });
      })
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
  //const currentItems = contactos.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  }

  const filteredContacts = contactos.filter(({ nombre, correo }) => 
    nombre.toLowerCase().includes(filter.toLowerCase()) || correo.toLowerCase().includes(filter.toLowerCase())
  );

  const currentItems = filteredContacts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  

  return {
    contactos,
    contactoSeleccionado,
    currentItems,
    addContacto,
    deleteContact,
    seleccionarContacto,
    handleClick,
    currentPage,
    filteredContacts,
    filter,
    setFilter
  }
}
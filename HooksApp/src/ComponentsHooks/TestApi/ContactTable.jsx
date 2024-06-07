import React from 'react';
import { Pagination } from './Pagination';

export const ContactTable = ({ currentItems, seleccionarContacto, deleteContact, itemsPerPage, totalItems, currentPage, handleClick }) => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(({ id_contacto, nombre, telefono, correo }) => (
              <tr key={correo}>
                <td>{id_contacto}</td>
                <td>{nombre}</td>
                <td>{telefono}</td>
                <td>{correo}</td>
                <td>
                  <button onClick={() => seleccionarContacto(correo)}
                    className="btn btn-success"
                  >Editar</button>
                  <button onClick={() => deleteContact(id_contacto)}
                    className="btn btn-danger"
                  >Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          currentPage={currentPage}
          handleClick={handleClick}
        />
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

 
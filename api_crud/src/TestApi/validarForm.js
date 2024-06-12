import {valoresEnv} from './constantesEnv';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

/**
 * Funcion 'validacion' que valida los campos del formulario de contacto
 */ 
export const validacion = (contacto) => {
    const {nombre,telefono,correo} = contacto;
    let bandera = false;

    if(nombre.trim() === '' || telefono.trim() === '' || correo.trim() === ''){
        toastr.error('Todos los campos son obligatorios', 'Error', { timeOut: 3000 });
        bandera = true;
    }

    return bandera;
}
/**
 * Funcion 'getData' que obtiene los datos de la API y los devuelve en formato JSON
 */
export const getData = async() => {
    const url = valoresEnv.URL;
    const token = valoresEnv.TOKEN;
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

/**
 * Funcion 'sendData' que envía los datos de un contacto a la API
 */
export const sendData = (contacto) => {
    console.log(contacto);
    const url = valoresEnv.URL;
    const token = valoresEnv.TOKEN;
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(contacto),
    });
}

/**
 * Funcion 'sendUpdateData' que envía los datos de un contacto a la API para ser actualizados
 */
export const sendUpdateData = (contacto) => {
    const url = valoresEnv.URL_ID + contacto.id_contacto;
    const token = valoresEnv.TOKEN;
    
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(contacto),
    });
}


/**
 * Funcion 'deleteData' que elimina un contacto de la API
 */
export const deleteData = (id_contacto) => {
    const url = valoresEnv.URL_ID + id_contacto;
    const token = valoresEnv.TOKEN;
    
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}


import {valoresEnv} from './constantesEnv';

export const validacion = (contacto) => {
    const {nombre,telefono,correo} = contacto;
    let bandera = false;

    if(nombre.trim() === '' || telefono.trim() === '' || correo.trim() === ''){
        console.log('Todos los campos son obligatorios');
        bandera = true;
    }

    return bandera;
}

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


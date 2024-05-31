export const validacion = (contacto,contactos) => {
    const {nombre,telefono,correo} = contacto;
    let bandera = false;

    if(contactos.some(contacto => contacto.nombre === nombre)){
        console.log('El nombre ya existe');
        bandera = true;
    }

    if(nombre.trim() === '' || telefono.trim() === '' || correo.trim() === ''){
        console.log('Todos los campos son obligatorios');
        bandera = true;
    }

    return bandera;
}

export const sendData = (contacto) => {
    console.log(contacto);
    const url = import.meta.env.VITE_APP_API_URL+'contactos';
    const token = import.meta.env.VITE_TOKEN_KEY;
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(contacto),
    });
}
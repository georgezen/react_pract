const validacion = (contacto,contactos) => {
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

export default validacion;
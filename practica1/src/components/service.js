export const cleanForm = (values,telefonos) => {
    const { nombre, apellidos } = values;

    let nombre_sin_espacios = nombre.trim();
    let apellidos_sin_espacios = apellidos.trim();
    values.data_telefonos = telefonos;
    let data_telefono = values.data_telefonos;

    console.log(telefonos);

    return {
        nombre: nombre_sin_espacios,
        apellidos: apellidos_sin_espacios,
        data_telefono    

    }
}

export const contadorPhone = (telefonos) => {
    let cont = 0;
    telefonos.forEach(telefono => {
        if (telefono === '') {
            cont++;
        }
    });
    return cont;
}
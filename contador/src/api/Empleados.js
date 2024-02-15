export const Empleados = async({nombre,apellidos}) => {
    console.log(nombre);
    const response = await fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellidos })
    });

    return response.json();
}
import {cleanForm} from './service';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const schema = Yup.object().shape({
    nombre: Yup.string().required('Nombre requerido')
        .min(4, 'Ingrese minimo 4 caracteres')
        .max(10, 'Ingrese maximo 10 caracteres'),
    apellidos: Yup.string().required('Apellido requerido')
        .min(4, 'Ingrese minimo 4 caracteres')
        .max(10, 'Ingrese maximo 10 caracteres'),
    
    
});

const CajaTexto = ({ onAddValor }) => {
    
    const [telefonos, setTelefonos] = useState(['']); 
    const [telefonoErrors, setTelefonoErrors] = useState([]);

    const { handleSubmit, handleChange,handleReset, errors,values } = useFormik({
        initialValues: {
            nombre: '',
            apellidos: '',
            data_telefonos: []
            
        },
        validationSchema: schema,
        onSubmit: (values, { setSubmitting }) => {
            
        // Validación personalizada para los campos de teléfono
        const newTelefonoErrors = [];
        for (let i = 0; i < telefonos.length; i++) {
            if (telefonos[i].trim() === '') {
                newTelefonoErrors[i] = `El teléfono ${i + 1} es obligatorio`;
            }
        }
        if (newTelefonoErrors.length > 0) {
            setTelefonoErrors(newTelefonoErrors);
            setSubmitting(false);
            return;
        }

            let form = cleanForm(values, telefonos);
            //onAddValor(form);
            console.log(contador);
            handleReset();
            setTelefonos(['']);

        }
    });

    const handleTelefonoChange = (index, event) => {
        const newTelefonos = [...telefonos];
        newTelefonos[index] = event.target.value;
        setTelefonos(newTelefonos);
    }

    const handleAddTelefono = () => {
        setTelefonos([...telefonos, '']);
    }

    const handleRemoveTelefono = (index) => {
        const newTelefonos = [...telefonos];
        newTelefonos.splice(index, 1);
        setTelefonos(newTelefonos);
    }

    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor="">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={handleChange} value={values.nombre}/>
                {errors.nombre ? <div>{errors.nombre} </div> : null}

                <label htmlFor="">Apellidos</label>
                <input type="text" id="apellidos" name="apellidos" onChange={handleChange} value={values.apellidos}/>
                {errors.apellidos ? <div>{errors.apellidos} </div> : null}

                {telefonos.map((telefono, index) => (
                    <div key={index}>
                        <label htmlFor="">Telefono {index + 1}</label>
                        <input type="text" name="telefono" value={telefono} onChange={(event) => handleTelefonoChange(index, event)}/>
                        {telefonoErrors[index] ? <div>{telefonoErrors[index]}</div> : null} 
                        <button type="button" onClick={() => handleRemoveTelefono(index)}>Eliminar telefono</button>
                    </div>
                ))}
    
                <button type="button" onClick={handleAddTelefono}>Agregar telefono</button>
    

                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" />
            </form>
        </>
    )
}

export default CajaTexto
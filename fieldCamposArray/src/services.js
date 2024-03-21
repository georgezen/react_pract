import * as Yup from 'yup';

// Esquema de validación con Yup
export const validationSchema = Yup.object().shape({
    nombre: Yup.string()
        .required('El nombre es requerido')
        .min(4, 'Ingrese mínimo 4 caracteres')
        .max(10, 'Ingrese máximo 10 caracteres'),
    email: Yup.string()
        .email('Email no válido')
        .required('El email es requerido'),
        telefonos: Yup.array()
        .of(
          Yup.string()
            .matches(/^[0-9]+$/, "Solo se permiten números")
            .min(10, 'El teléfono debe tener exactamente 10 dígitos')
            .max(10, 'El teléfono debe tener exactamente 10 dígitos')
            .required('El teléfono es requerido')
        )
        .required('Debe agregar al menos un teléfono'),
        
});
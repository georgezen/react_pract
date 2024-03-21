import {  Field, ErrorMessage } from 'formik';

export const telefonosData = (arrayHelpers, values, handleChange) => {

    const {push, remove} = arrayHelpers;

    return (
        <>
            <h3>Telefonos</h3>
            {
                values.telefonos.map((_, index) => (
                    <div key={index}>
                        <Field type="text"
                            name={`telefonos.${index}`}
                            value={values.telefonos[index]}
                            onChange={handleChange}
                            className='input-remove'
                            />
                        <ErrorMessage name={`telefonos.${index}`} component="div" />    
                        <button type="button" onClick={() =>remove(index)} className='btn-remove'>Remover</button>    
                    </div>
                ))}
            <div>
                <button type="submit" onClick={() =>push('')} className='btn'>Añadir telefono</button>
            </div>


        </>
    )
}
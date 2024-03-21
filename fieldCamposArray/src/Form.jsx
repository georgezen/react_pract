import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import {validationSchema} from './services';
import { telefonosData } from './telefonosData';
import {CompFieldArray} from './CompFieldArray';
import {CompLabel} from './components/CompLabel';
import {CompField} from './components/CompField';


const initialValues = {
    nombre: '',
    email: '',
    telefonos: []
};

const Formulario = () => {

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <div className='container'>
            <div className="titulo">
                <h1>Formulario</h1>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ values, handleChange, handleSubmit, resetForm}) => (
                        <form onSubmit={handleSubmit} autoComplete='off'>
                            <CompLabel htmlFor="nombre" valueLabel="Nombre"
                            />
                            <CompField
                                prop_type="text"
                                prop_id="nombre"
                                prop_name="nombre"
                                prop_values={values.nombre}
                                prop_handleChange={handleChange}
                            />
                            <ErrorMessage name="nombre" component="div" />

                            <CompLabel
                                htmlFor="email"
                                valueLabel="Email"
                            />
                            <CompField
                                prop_type="text"
                                prop_id="email"
                                prop_name="email"
                                prop_values={values.email}
                                prop_handleChange={handleChange}
                            />
                            <ErrorMessage name="email" component="div" />

                            <CompFieldArray 
                                name="telefonos"
                                onRender={arrayHelpers => telefonosData(arrayHelpers, values, handleChange)}
                            />

                            <button type="submit" className='btn'>Enviar</button>
                            <button type="button" className='btn' onClick={resetForm}>Resetear</button>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Formulario

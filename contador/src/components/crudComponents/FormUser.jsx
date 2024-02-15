import { Form, Formik } from "formik";
import {Empleados} from "../../api/Empleados";


const FormUser = () => {
    return (
        <>
            <Formik
                initialValues={
                    {
                        nombre: "",
                        apellidos: ""
                    }
                }
                onSubmit={
                    async (values) => {
                        try {
                            
                            let response = await Empleados(values);
                            console.log(response);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
            >
                {
                    ({handleChange,handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Nombre" name="nombre" 
                            onChange={handleChange}
                            />

                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" className="form-control" id="apellidos" placeholder="apellidos" name="apellidos" 
                            onChange={handleChange}
                            />

                           <input type="submit" className="button" value="Guardar" />
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}

export default FormUser

import { useEffect } from 'react';
import useForm from './useForm';


const FormSimple = () => {

    const {estadoForm,handleInputChange,reset} = useForm({
        nombre: '',
        correo: '',
        password: ''
    });

    const {nombre,correo,password} = estadoForm;

    return (
        <>
            <h1 className="h1">Formulario autenticacion</h1>

            <div className="row">
                <div className="col-md-4">
                    <form action="">

                        <label htmlFor="" className="m-2">Nombre</label>
                        <input type="text" className="form-control m-2" name="nombre" id="nombre" placeholder="nombre" value={nombre} onChange={handleInputChange}/>

                        <label htmlFor="" className="m-2">Correo</label>
                        <input type="email" className="form-control m-2" name="correo" id="correo" placeholder="correo" value={correo} onChange={handleInputChange}/>

                        <label htmlFor="" className="m-2">Contraseña</label>
                        <input type="password" className="form-control m-2" name="password" id="password" placeholder="password" value={password} onChange={handleInputChange}/>

                    </form>
                        <button type="button" className="btn btn-primary m-2" onClick={reset}>Limpiar</button>
                    
                
                </div>
            </div>
        </>
    )
}

export default FormSimple

import { useState,useEffect } from 'react';
import Message from './Message';

const FormSimple = () => {
    const [estadoForm, setEstadoForm] = useState({
        nombre: '',
        correo: ''
    });

    const { nombre, correo } = estadoForm;

    const handleInputChange = ({target}) => {
        const {name, value} = target;
        setEstadoForm({
            ...estadoForm,
            [name]: value
        });
    }

    useEffect(() => {
        console.log('renderizado total componente');
    }, []);

    useEffect(() => {
        console.log('renderizado de formulario');
    }, [estadoForm]);

    useEffect(() => {
        console.log('renderizado de nombre');
    }, [nombre]);
    

    return (
        <>
            <h1 className="h1">FormSimple</h1>

            <div className="row">
                <div className="col-md-4">
                    <form action="">

                        <label htmlFor="" className="m-2">Nombre</label>
                        <input type="text" className="form-control m-2" name="nombre" id="nombre" placeholder="nombre" value={nombre} onChange={handleInputChange}/>

                        <label htmlFor="" className="m-2">Correo</label>
                        <input type="email" className="form-control m-2" name="correo" id="correo" placeholder="correo" value={correo} onChange={handleInputChange}/>
                    </form>
                    {
                        (nombre === '123') && <Message />
                    }
                
                </div>
            </div>
        </>
    )
}

export default FormSimple

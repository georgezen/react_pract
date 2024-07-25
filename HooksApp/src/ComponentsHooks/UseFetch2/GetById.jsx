import {useState } from 'react';
import useFetch from './useFetch';

const GetById = () => {
    const [contactoId, setContacto] = useState('');
    const { contactoData } = useFetch(contactoId); 
    
    console.log(contactoData);
    const { nombre, telefono, correo } = contactoData;

    const handleInputChange = async (e) => {
        const id = e.target.value;
        setContacto(id);
    }

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="contacto">Contacto</label>
                    <input
                        type="text"
                        name="contacto"
                        id="contacto"
                        className='form-control'
                        onChange={handleInputChange}
                        value={contactoId}
                    />
                </div>
                <div className="col-md-4">

                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">El telefono es:{telefono}  y el correo es{correo} </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetById;
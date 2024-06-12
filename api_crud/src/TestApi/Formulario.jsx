import { useState,useEffect } from "react";


const Formulario = ({onAddContacto,onContacto}) => {

    const [form, setForm] = useState({
        id_contacto: null,
        nombre: '',
        telefono: '',
        correo: ''
    });

    useEffect(() => {
        if (onContacto) {
            setForm(onContacto);
        }
    }, [onContacto]);

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddContacto(form);
        setForm({
            nombre: '',
            telefono: '',
            correo: ''
        });
    }

  return (
      <div className="form-container">
        
        <form onSubmit={ handleSubmit } className="contact-form">
            <fieldset className="campo_contacto">Contacto</fieldset>
            <input type="text" name="nombre" id="nombre" placeholder='Nombre' onChange={handleChange} value={form.nombre} className="form-input"/>    
            <input type="number" name="telefono" id="telefono" placeholder='Teléfono' onChange={handleChange} value={form.telefono} className="form-input"/>    
            <input type="email" name="correo" id="correo" placeholder='Correo' onChange={handleChange} value={form.correo} className="form-input"/>    
            <input type="submit" value="Guardar" className="form-submit"/>
        </form> 
    </div>
  )
}

export default Formulario
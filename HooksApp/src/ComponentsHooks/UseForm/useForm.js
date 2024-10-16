import { useState } from 'react';

const useForm = (structureForm) => {
    const [estadoForm, setEstadoForm] = useState(structureForm);

    const handleInputChange = ({target}) => {
        const {name, value} = target;
        
        setEstadoForm({
            ...estadoForm,
            [name]: value
        });
    }

    const reset = () => {
        setEstadoForm(structureForm);
    }



  return {
    estadoForm,
    handleInputChange,
    reset

  }
}

export default useForm

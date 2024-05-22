import { useState } from 'react';

const CajaNumber = ({onAddValor}) => {

    const [inputValue, setInputValue] = useState('');
    const handleChange = ({ target }) => {
        const { value } = target;
        console.log(value);
        setInputValue(value); 
      }


      const saveValue = () => {
        console.log('guardando el valor', inputValue);
        onAddValor(inputValue);
        setInputValue('');
      }

  return (
    <>
        <input type="number" name="numerin" id="numerin" className="form-control ml-2" value={inputValue} onChange={handleChange} /> 
        <button type='button' className='btn btn-success' onClick={saveValue}>Añadir</button>
    </>
  )
}

export default CajaNumber

import { useState } from 'react'

export const AddCategoria = ({ onAddCategoria }) => {

  const [inputValue, setInputValue] = useState('');


  const changeValueCategoria = (e) => {
    setInputValue(e.target.value);
  }

  /*a los eventos onsubmit de react hay que mandarles los event para evitar
  que se recargue la pagina*/
  const onSubmitCategoria = (e) => {
    e.preventDefault();
    addCategoryEnter();
  }

  const addCategory = () => {
    addCategoryEnter();
  }

  const addCategoryEnter = () => {
    if (inputValue.trim().length <= 1) return;
    onAddCategoria(inputValue.trim());
    setInputValue('');
  }
  return (
    <>

      <form onSubmit={ onSubmitCategoria}>
        <input type="text" name="categoria" id="categoria" placeholder='Busca el heroe que mas te provoca sueños humedos'
          value={inputValue}
          onChange={ changeValueCategoria} />
      </form>
      <input onClick={addCategory} type="button" value="agregar" className='button' />

    </>
  )
}



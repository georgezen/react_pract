import { useContext } from 'react';
import { UsuarioContext } from './context/UsuarioContext';
const PageLogin = () => {

  const { dataSesion, setDataSesion } = useContext(UsuarioContext);



  return (
    <>
      <h1>PageLogin con nombre:{dataSesion?.name} </h1>
      <button type="button" className='btn btn-success'
        onClick={() => setDataSesion({
          id: 1234,
          name: 'la zorra',
          email: 'george@gmail.com'
        })}
      >
        Show info
      </button>
    </>
  )
}

export default PageLogin

import { useState } from 'react';
import { UsuarioContext } from './UsuarioContext';

export const UsuarioProvider = ({children}) => {

  const [dataSesion, setDataSesion] = useState();

  return (
    <UsuarioContext.Provider value={{dataSesion,setDataSesion}}>
      {children}
    </UsuarioContext.Provider>
  )
}
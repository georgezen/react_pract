
import { Navigate, Route,Routes } from 'react-router-dom';

import {UsuarioProvider} from './context/UsuarioProvider';
import PageAbout from './PageAbout';
import PageHome from './PageHome';
import PageLogin from './PageLogin';
import NavBar from './NavBar';

const ContextApp = () => {
  return (
    <UsuarioProvider>
        <h1>ContextApp</h1>    
         <NavBar />
        <hr />
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="about" element={<PageAbout />} />
            <Route path="login" element={<PageLogin />} />

            <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>

    </UsuarioProvider>
  )
}

export default ContextApp

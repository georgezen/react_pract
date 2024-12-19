import { Navigate, Route, Routes } from 'react-router-dom';
import PageHome from './PageHome';
import PageCounter from './Counter/PageCounter';
import PageForm from './Formulario/PageForm';
import PageListReduce from './FormReduce/PageListReduce';
import PageConversor from './MoneyConversor/PageConversor';
import CrudApi from './CrudApi/CrudApi';


const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="counter" element={<PageCounter />} />
        <Route path="form" element={<PageForm />} />
        <Route path="formReduce" element={<PageListReduce />} />
        <Route path="conversor" element={<PageConversor />} />
        <Route path="crudApi" element={<CrudApi />} />


        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      
    </>
  )
}

export default Rutas

import { CounterProvider } from './CounterContext/CounterProvider';
import Navbar from './Navbar';
import Rutas from './Rutas';


const HomeAllThings = () => {
  return (
    <>

      <h1>Practica de todos los temas</h1>
      <hr />
      <CounterProvider>
        <Navbar />
        <Rutas />
      </CounterProvider>



    </>
  )
}

export default HomeAllThings

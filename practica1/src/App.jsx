import { useState } from 'react';
import propTypes from 'prop-types';
import Titulo from './Titulo';
import { logicaContador } from './logicaContador';

export const App = ({ value, suma, restando, reset }) => {

    const [contando, setContando] = useState(value);

    const sumando = (letra) => {

        const numero = logicaContador(letra, contando);
        return setContando(numero);
    }

    return (
        <>
            <Titulo titulo={'Contador de practica'}></Titulo>
            <span className='letras'>{contando}</span>

            <input type="button" onClick={() => sumando(suma)} value="+1" className='boton' />
            <input type="button" onClick={() => sumando(restando)} value="-1" className='boton' />
            <input type="button" onClick={() => sumando(reset)} value="reset" className='boton' />


        </>
    )
}



App.propTypes = {
    value: propTypes.number.isRequired
}

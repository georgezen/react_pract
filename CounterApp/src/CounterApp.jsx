import { useState } from 'react';
import propTypes from 'prop-types';


export const CounterApp = ({ value }) => {
    console.log('render');

    const [counter, setCounter] = useState(value);

    const sumando = () => {
        setCounter(counter + 1);
    }

    const restando = () => {
        setCounter(counter - 1);
    }

    const reseteo = () => {
        setCounter(value);
    }

    return (
        <>
            <p className="verdin">Contador App</p>
            <p>{counter}</p>

            <input type="button" onClick={sumando} className='sumando' value="+1"
            />
            <input type="button" onClick={restando} className='sumando' value="-1"
            />
            <input type="button" onClick={reseteo} id="reset" className='sumando' value="reset"
            />

        </>
    )
}

CounterApp.propTypes = {
    value: propTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}
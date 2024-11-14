import { useReducer,useState } from "react";
import {reducerLogic,initialState} from './reducer3';

const Reducer3 = () => {

    const [state, dispatch] = useReducer(reducerLogic, initialState);
    

      const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
        type: name === 'numero1' ? 'SET_NUMERO1' : 'SET_NUMERO2',
        payload: value
        });
        
      };      


    const operador = (e) => {
        e.preventDefault();
        let tipo;
        const buttonName = e.nativeEvent.submitter.name;
        if (buttonName === 'sumar') {
            tipo = 'sumar';
        } else if (buttonName === 'restar') {
            tipo = 'restar';
        } else if (buttonName === 'multi') {
            tipo = 'multiplicar';
        } else if (buttonName === 'dividir') {
            tipo = 'dividir';
        }
        
        const action = {
            type: tipo
            
        }
        dispatch(action);
    }

    



    return (
        <>
            <h1>Calculadora con reducer</h1>

            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <form onSubmit={operador}>
                            <fieldset>
                            <label htmlFor="">Numero 1</label>
                            <input type="number" className="form-control" name="numero1" id="numero1" onChange={handleChange} value={state.numero1}/>

                            <label htmlFor="">Numero 2</label>
                            <input type="number" className="form-control" name="numero2" id="numero2" onChange={handleChange} value={state.numero2}/>

                            </fieldset>

                            <button className="btn btn-primary" name="sumar">Sumar</button>
                            <button className="btn btn-primary" name="restar">Restar</button>
                            <button className="btn btn-primary" name="multi">Multiplicar</button>
                            <button className="btn btn-primary" name="dividir">Dividir</button>
                        </form>
                    
                    </div>
                    <div className="col-4">
                        <span>Resultado: {state.resultado} </span>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Reducer3

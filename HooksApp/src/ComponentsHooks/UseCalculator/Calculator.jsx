import useCalculator from './useCalculator';

const Calculator = () => {

    const { numeros,
        result,
        handleInputChange,
        operacion
    } = useCalculator({
        num1: 0,
        num2: 0
    });

    const { num1, num2 } = numeros;

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <h1>Calculadora</h1>
                    <label htmlFor="">numero 1</label>
                    <input type="text" className="form-control" name="num1" id="" onChange={handleInputChange} value={num1} />

                    <label htmlFor="">numero 2</label>
                    <input type="text" className="form-control" name="num2" id="" onChange={handleInputChange} value={num2} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <button className="btn btn-primary" onClick={() => operacion('+')}>Sumar</button>
                    <button className="btn btn-danger" onClick={() => operacion('-')}>Restar</button>
                    <button className="btn btn-success" onClick={() => operacion('*')}>Multiplicar</button>
                    <button className="btn btn-warning" onClick={() => operacion('/')}>Dividir</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h1>Resultado: {result}</h1>
                </div>
            </div>
        </>
    )
}

export default Calculator

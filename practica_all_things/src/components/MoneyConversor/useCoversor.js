import { useState, useEffect } from "react";

const useCoversor = (dataMoneda) => {

    const [dolar, setDolar] = useState(dataMoneda);
    const [isLoading, setIsLoading] = useState(true);
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        fetch('https://mx.dolarapi.com/v1/cotizaciones/usd')
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setDolar({
                    moneda: data.moneda,
                    nombre: data.nombre,
                    valorCambio: data.fix
                });
                setIsLoading(false);
            });

    }, []);

    const handleChange = ({ target }) => {
        const { value } = target;
        console.log(value);
        
        setValor(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let resultado = parseFloat(valor) * parseFloat(dolar.valorCambio);
        setResultado(resultado.toFixed(2));
    }

    return {
        dolar,
        isLoading,
        valor,
        handleChange,
        resultado,
        handleSubmit
    }
}

export default useCoversor

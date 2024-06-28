import { useState } from 'react';

const useCalculator = () => {
    const [numeros, setNumeros] = useState({ num1: 0, num2: 0 });
    const [result, setResult] = useState(0);

    const handleInputChange = ({ target }) => {
        setNumeros(prev => ({ ...prev, [target.name]: target.value }));
    }

    const operacion = (operador) => {
        const { num1, num2 } = numeros;
        const ops = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        };
        setResult(ops[operador](parseInt(num1), parseInt(num2)));
    }

    return { numeros, result, handleInputChange, operacion };
}

export default useCalculator;
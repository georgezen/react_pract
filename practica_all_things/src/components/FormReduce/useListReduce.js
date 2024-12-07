import { useState, useReducer, useEffect } from 'react';

const useListReduce = () => {
    const initialState = [];

    const idUnico = () => {
        return Math.random().toString(36).substr(2, 9);
    }

    const reducerPerson = (estadoInicial = [], action) => {
        switch (action.type) {
            case 'add':
                return [...estadoInicial, action.payload];
            case 'delete':
                return estadoInicial.filter(item => item.id !== action.payload);
                   
            default:
                return estadoInicial;
        }
    }


const iniciando = () => {
    return JSON.parse(localStorage.getItem('listado')) || [];
}

const [listPerson, dispatch] = useReducer(reducerPerson, initialState, iniciando);
    const [person, setPerson] = useState({
        id: idUnico(),
        nombre: ''
    });

    useEffect(() => {
        localStorage.setItem('listado', JSON.stringify(listPerson));
    }, [listPerson]);



    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPerson({
            ...person,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
        const action = {
            type: 'add',
            payload: person
        }

        dispatch(action);

        setPerson({
            id: idUnico(),
            nombre: ''
        })
    }

    const deletePerson = (id) => {
        console.log(id);

        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);

    }
  
  
  
  
    return {
        handleChange,
        handleSubmit,
        deletePerson,
        listPerson,
        person



  }
}

export default useListReduce

import { useState, useReducer, useEffect } from 'react';

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

const ListReduce = () => {

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




    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <table className="table table-border table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listPerson.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nombre}</td>
                                            <td><button className='btn btn-danger' onClick={() => deletePerson(item.id)}>Eliminar</button></td>
                                        </tr>
                                    ))
                                }




                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="m-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" onChange={handleChange} value={person.nombre} />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListReduce

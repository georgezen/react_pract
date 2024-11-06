import { useReducer, useState,useEffect } from 'react';
import { todoReducer, initialListaTareas } from './todoReducer2';

/**
 * Generates a unique identifier string.
 *
 * @returns {string} A unique identifier consisting of a random alphanumeric string.
 */
const idUnico = () => {
    return Math.random().toString(36).substr(2, 9);
}

const init = () => {
    return JSON.parse(localStorage.getItem('tareas')) || [];
}

const ListaReducer = () => {
    const [listaTareas, dispatch] = useReducer(todoReducer, initialListaTareas,init);
    const [form, setForm] = useState({
        id: idUnico(),
        tarea: '',
        estado: false
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(listaTareas));
    }, [listaTareas]);

    const addTarea = (tarea) => {
        const action = {
            type: 'add',
            payload: tarea
        }
        dispatch(action);
    }

    const editTarea = (tarea) => {
        console.log(tarea);
        const action = {
            type: 'edit',
            payload: tarea
        }
        dispatch(action);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            editTarea(form);
            setIsEditing(false);
        } else {
            addTarea(form);
        }
        setForm({
            id: idUnico(),
            tarea: '',
            estado: false
        });
    }

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            tarea: target.value
        });
        console.log(target.value);

    }

    const toogleComplete = (id) => {
        console.log(id);

        const action = {
            type: 'toogleTask',
            payload: id
        }

        dispatch(action);
    }

    const handleEditClick = (tarea) => {
        if (tarea.estado) return;
        setForm(tarea);
        console.log(tarea);
        
        setIsEditing(true);
    }


    const deleteTarea = (taskId) => {

        const action = {
            type: 'deleted',
            id: taskId
        }
        dispatch(action);
      }

    


    return (
        <>
            <h1>ListaReducer</h1>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h3>Lista de tareas</h3>
                        <table className="table table-border table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Estado</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listaTareas.map(tarea => (
                                        <tr key={tarea.id}
                                            
                                        >
                                            <td
                                            onClick={() => toogleComplete(tarea.id)}
                                            >{tarea.tarea}</td>
                                            <td>{tarea.estado ? 'Completada' : 'Pendiente'}</td>
                                            <td>
                                            <button type="button" className="btn btn-success" onClick={() => handleEditClick(tarea)}>Editar</button>
                                            
                                            <button type="button" className="btn btn-danger"
                                            onClick={() => deleteTarea(tarea.id)}
                                            >Eliminar</button> </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        <h3>Añadir tarea</h3>
                        <form onSubmit={handleSubmit} autoComplete="off">

                            <input type="text" name="addTask" className='form-control mt-1 mb-1' id="addTask" value={form.tarea} onChange={handleChange} />
                            <button type="submit" className='btn btn-primary mt-2'>Agregar</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListaReducer

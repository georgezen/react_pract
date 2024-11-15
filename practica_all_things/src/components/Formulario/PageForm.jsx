
import { useState } from 'react';
import FormPerson from './FormPerson';

const list = [
   
]

const PageForm = () => {

    const [listPerson, setListPerson] = useState(list);


    const addPerson = (person) => {
        console.log(person);

        setListPerson([...listPerson, person]);
    }

    const deletePerson = (id) => {
        console.log(id);
        const newArray = listPerson.filter((item) => item.id !== id);
        setListPerson(newArray); 
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
                                    <th>Edad</th>
                                    <th>Acciones</th>

                                </tr>
                            </thead>
                            <tbody> 

                                    {
                                        listPerson.map((person) => {
                                            return (
                                                <tr key={person.id}>
                                                    <td>{person.id}</td>
                                                    <td>{person.nombre}</td>
                                                    <td>{person.age}</td>
                                                    <td>
                                                        <button className="btn btn-danger"
                                                        onClick={() => deletePerson(person.id)}
                                                        >Eliminar</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                            </tbody>

                        </table>
                    </div>
                    <div className="col-4">
                        <FormPerson onAddPerson={(e) => addPerson(e)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageForm

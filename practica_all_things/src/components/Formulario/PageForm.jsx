
import { useState } from 'react';
import FormPerson from './FormPerson';
import TrPerson from './TrPerson';

const list = [];

const PageForm = () => {

    const [listPerson, setListPerson] = useState(list);


    const addPerson = (person) => {
        console.log(person);
        let esta = listPerson.some((item) => item.nombre === person.nombre);
        if (esta) return;
        
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
                                                <TrPerson person={person} onDeletePerson={deletePerson}/>
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

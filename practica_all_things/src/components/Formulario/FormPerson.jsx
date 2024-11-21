import { useState } from "react"

const idUnico = () => {
    return Math.random().toString(36).substr(2, 9);
}

const FormPerson = ({onAddPerson}) => {

    const [person, setPerson] = useState({
        id: idUnico(),
        nombre: '',
        age: 0
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setPerson({
            ...person,
            [name]: value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPerson(person);
        setPerson({
            id: idUnico(),
            nombre: '',
            age: 0
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                <fieldset>
                    <legend>Registro de personas</legend>
                </fieldset>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" onChange={handleChange} value={person.nombre} />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Edad</label>
                    <input type="number" className="form-control" id="age" name="age" onChange={handleChange} value={person.age} />

                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default FormPerson

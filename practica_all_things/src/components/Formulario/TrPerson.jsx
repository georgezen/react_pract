
const TrPerson = ({person,onDeletePerson}) => {
    return (
        <>
            <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.nombre}</td>
                <td>{person.age}</td>
                <td>
                    <button className="btn btn-danger"
                        onClick={() => onDeletePerson(person.id)}
                    >Eliminar</button>
                </td>
            </tr>
        </>
    )
}

export default TrPerson

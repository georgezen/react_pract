import useListReduce from './useListReduce';

const PageListReduce = () => {

    const {handleChange,handleSubmit,deletePerson,listPerson,person} = useListReduce();

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

export default PageListReduce

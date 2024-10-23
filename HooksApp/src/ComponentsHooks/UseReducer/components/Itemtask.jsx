

const Itemtask = ({desc,indice}) => {
    return (
        <>
            <li  className="list-group-item d-flex justify-content-between">
                <span className='align-self-center'>{indice + 1}</span>
                <span className='align-self-center'>{desc}</span>
                <button className='btn btn-danger'>Borrar</button>
            </li>

        </>
    )
}

export default Itemtask

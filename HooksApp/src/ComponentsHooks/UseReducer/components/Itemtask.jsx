const Itemtask = ({ desc, indice, done, onRemoveTask, indicetodo, onMarkComplete }) => {


    return (
        <>
            <li className={`list-group-item d-flex justify-content-between ${(done) ? 'bg-success text-white' : ''}`}
                onClick={() => onMarkComplete(indicetodo)}
            >
                <span className='align-self-center'>{indice + 1}</span>
                <span className='align-self-center'>{desc}</span>
                {(done) ? <span className='align-self-center'>Hecho</span> : ''}
                <button className='btn btn-danger' onClick={() => onRemoveTask(indicetodo)}>Borrar</button>
            </li>
        </>
    );
}

export default Itemtask

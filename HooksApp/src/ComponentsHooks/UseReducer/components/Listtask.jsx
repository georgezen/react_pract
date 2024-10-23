import Itemtask from './Itemtask';

const Listtask = ({listaTodos}) => {
    return (
        <>
            <ul className="list-group">
                {
                    listaTodos.map(({id,task}, index) => (
                        <Itemtask key={id} desc={task} indice={index}/>
                    ))
                }
            </ul>
        </>
    )
}

export default Listtask

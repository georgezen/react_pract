import Itemtask from './Itemtask';

const Listtask = ({listaTodos,onRemoveTask,onMarkComplete}) => {
    return (
        <>
            <ul className="list-group">
                {
                    listaTodos.map((listaTodos, index) => (
                        <Itemtask key={listaTodos.id} desc={listaTodos.task} indice={index} done={listaTodos.done} onRemoveTask={onRemoveTask} indicetodo={listaTodos.id}
                        onMarkComplete={onMarkComplete}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default Listtask

import Listtask from './components/Listtask';
import FormAddTask from './components/FormAddTask';
import useTodoTask from './components/useTodoTask';


const Reducer = () => {

    const { listaTasks, addTask, removeTask, toogleComplete,counterTask,complete } = useTodoTask();


    return (
        <>
            <h1>Lista de Tareas</h1>
            <span>Tareas pendientes: {counterTask} Tareas completadas {complete}</span>
            <hr />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 mb-4">
                        <Listtask listaTodos={listaTasks} onRemoveTask={removeTask}
                        onMarkComplete={toogleComplete}
                        />
                    </div>
                    <div className="col-5 mt-1">
                        <FormAddTask onAddTask={(e) => addTask(e)}
                            />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Reducer;

import { useReducer,useState } from 'react';
import {todoReducer,initialState} from './todoReducer';
import Listtask from './components/Listtask';
import FormAddTask from './components/FormAddTask';




const Reducer = () => {

    //const [state, disparador] = useReducer(todoReducer, initialState);
    const [tareas, setTask] = useState(initialState);

    const addTask = (task) => {
        console.log(task);
    
        //if (categorias.includes(categoria)) return;
    
        setTask([...tareas, task]);
      }


    return (
        <>
            <h1>Reducer</h1>
            <hr />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <Listtask listaTodos={tareas}/>
                    </div>
                    <div className="col-5 mt-1">
                        <FormAddTask onAddTask={(e) => addTask(e)}/>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Reducer;

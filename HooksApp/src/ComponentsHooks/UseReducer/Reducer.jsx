import { useReducer,useEffect } from 'react';
import {todoReducer,initialState} from './todoReducer';
import Listtask from './components/Listtask';
import FormAddTask from './components/FormAddTask';

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

const Reducer = () => {

    const [listaTasks, disparador] = useReducer(todoReducer, initialState,init);

    /**Se dispara el useEffect para guardar en localstorage */
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(listaTasks));
    }, [listaTasks]);

    const addTask = (task) => {
        console.log(task);
        const action = {
            type: 'add',
            payload: task
        }

        const existeTarea = listaTasks.some(t => t.task === task.task);
        if (existeTarea) return;
    
        
        disparador(action);
      }

      const removeTask = (id) => {
        console.log(id);
        
        const action = {
            type: 'remove',
            payload: id
        }
    
        disparador(action);
      }

      const toogleComplete = (id) => {
        console.log(id);
        console.log('hola putos');
        
        const action = {
            type: 'toogleTask',
            payload: id
        }
    
        disparador(action);
      }


    return (
        <>
            <h1>Reducer</h1>
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

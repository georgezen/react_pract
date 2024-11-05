import { useReducer,useEffect } from 'react';
import {todoReducer,initialState} from '../todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

const useTodoTask = () => {
    let counterTask = 0,complete = null;

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

      
      counterTask =    listaTasks.length;

      complete = listaTasks.filter(tarea => tarea.done).length;
      


  return {
    listaTasks,
    addTask,
    removeTask,
    toogleComplete,
    counterTask,
    complete
  }
}

export default useTodoTask

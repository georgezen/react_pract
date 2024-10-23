const tareas = [
    {
        id: 1,
        tarea: 'Estudiar React',
        completada: false
    },
    {
        id: 2,
        tarea: 'Estudiar Angular',
        completada: false
    },
    {
        id: 3,
        tarea: 'Estudiar Vue',
        completada: false
    }
];


const tasksReducer = (state = tareas, action = {}) => {
    if (action.type === 'add') {
        return [...state, action.payload];
    }


    return state;
}

let allTasks = tasksReducer();

let newTask = {
    id: 4,
    tarea: 'Estudiar JavaScript',
    completada: false
}

const addTaskAction = {
    type: 'add',
    payload: newTask
}

allTasks = tasksReducer(allTasks, addTaskAction);

//console.log({estateNow: allTasks});




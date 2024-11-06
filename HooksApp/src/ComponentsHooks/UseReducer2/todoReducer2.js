
export const todoReducer = (estadoInicial = [], action) => {
    switch (action.type) {
        case 'add':
            return [...estadoInicial, action.payload];
        case 'toogleTask':
            return estadoInicial.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        estado: !task.estado
                    }
                }
                return task;

            });
        case 'edit':
            return estadoInicial.map(tarea =>
                tarea.id === action.payload.id ? { ...tarea, tarea: action.payload.tarea } : tarea
            );

        case 'deleted': {
            return estadoInicial.filter(tarea => tarea.id !== action.id);
        }
        default:
            return estadoInicial;
    }
}

export const initialListaTareas = [
];


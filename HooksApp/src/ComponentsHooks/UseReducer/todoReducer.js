
export const todoReducer = (estadoInicial = [], action) => {
    switch (action.type) {
        case 'add':
            return [...estadoInicial, action.payload];
        case 'remove':
            return estadoInicial.filter(task => task.id !== action.payload);

        case 'toogleTask':
            return estadoInicial.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return task;

            });
        default:
            return estadoInicial;
    }
}

export const initialState = [
];


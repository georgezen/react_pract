
export const todoReducer = (estadoInicial, action) => {
    switch (action.type) {
        case 'add':
            throw new Error('No se puede agregar');
     
        default:
            return estadoInicial;
    }
}

export const initialState = [{
    id: 1,
    task: 'Fernando',
    done: false
},
{
    id: 2,
    task: 'Buscar otro trabajo',
    done: false
}
];


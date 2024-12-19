const reducerPerson = (estadoInicial, action) => {
    switch (action.type) {
        case 'get':
            return [...action.payload];
        case 'add':
            return [...estadoInicial, action.payload];
        // case 'delete':
        //     return estadoInicial.filter(item => item.id !== action.payload);
               
        default:
            return estadoInicial;
    }
}

export {
    reducerPerson
}
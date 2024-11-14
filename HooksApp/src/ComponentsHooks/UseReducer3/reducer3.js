export const reducerLogic = (state, action) => {
    switch (action.type) {
        case 'SET_NUMERO1':
            return {
                ...state,
                numero1: action.payload
            };
        case 'SET_NUMERO2':
            return {
                ...state,
                numero2: action.payload
            };
        case 'sumar':
            return {
                ...state,
                resultado: Number(state.numero1) + Number(state.numero2)
            }
        case 'restar':
            return {
                ...state,
                resultado: Number(state.numero1) - Number(state.numero2)
            }
        case 'multiplicar':
            return {
                ...state,
                resultado: Number(state.numero1) * Number(state.numero2)
            }
        case 'dividir':
            return {
                ...state,
                resultado: Number(state.numero1) / Number(state.numero2)
            }
        default:
            return state;
    }
}

export const initialState = {
    numero1: 0,
    numero2: 0,
    resultado: 0
}
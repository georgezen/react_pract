export const logicaContador = (letra,contando) => {
    if (letra === 'r') {
        return contando -1;
    }
    if (letra === 's') {
        return contando+1;
    }
    if (letra === 'reset') {
        return 10;
    }
    return 10;
}
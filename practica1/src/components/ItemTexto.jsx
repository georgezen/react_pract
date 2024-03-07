

const ItemTexto = ({valor,removeValor}) => {
    return (
        <>
            <li>
            {valor.nombre} {valor.apellidos}
                <button onClick={() => removeValor(valor)}>Eliminar</button>
            </li>

        </>
    )
}

export default ItemTexto

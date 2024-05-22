import customFigonachi from './customFigonachi'

const ItemNumber = ({valor}) => {
    const { total} = customFigonachi(valor);

    return (
        <>
            <li key={valor}>
                {total}
            </li>
        </>
    )
}

export default ItemNumber

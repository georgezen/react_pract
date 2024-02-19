import { ThirdComponent } from "./ThirdComponent"
import propTypes from 'prop-types';

export const OtroTexto = ({textin}) => {

    return (
        <>
            <p>{textin}</p>
            <p>y te vale verga</p>
            <ThirdComponent third="Este es el tercer componente desde props"/>
        </>

    )
}

// parte donde se definen los tipos de las props
OtroTexto.propTypes = {
    textin: propTypes.string.isRequired
}

// parte donde se definen los valores por defecto de las props
OtroTexto.defaultProps = {
    textin: "Este es el segundo componente desde defaultProps"
}
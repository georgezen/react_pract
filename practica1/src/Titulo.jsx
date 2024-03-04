
import PropTypes from 'prop-types'

const Titulo = ({titulo}) => {
  return (
    <>
       <h1 className='letras'>{titulo}</h1>
    </>
  )
}

Titulo.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Titulo

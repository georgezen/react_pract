import useFetch from './useFetch';
import useCounter from "../UseCounterCustom/useCounter";
import CardPokemon from './CardPokemon';


const FecthCustom = () => {
  const { counter, aumento, decremento, reset } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(counter);



  return (
    <>
      <h1>Fetch Custom</h1>

      <div className="contein">
        <h1>{isLoading ? 'Cargando...' :
          <CardPokemon
            nombrePoke={data?.name}
            idPoke={data?.id}
          />
        }</h1>

      </div>

      <button type="button"
        className="btn btn-primary"
        onClick={() => decremento()}
      >
        Anterior
      </button>

      <button type="button"
        className="btn btn-success"
        onClick={() => aumento()}
      >
        Siguiente
      </button>
      <button type="button"
        className="btn btn-danger"
        onClick={() => reset()}
      >
        Resetear
      </button>
    </>
  )
}

export default FecthCustom

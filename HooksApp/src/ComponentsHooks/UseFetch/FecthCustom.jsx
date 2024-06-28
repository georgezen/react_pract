import useFetch from './useFetch';
import { useState } from 'react';

const FecthCustom = () => {

  const [pokemonId, setPokemonId] = useState('');
  const { data,isLoading,hasError } = useFetch(pokemonId);

  const handleInputChange = (e) => {
    setPokemonId(e.target.value);
    console.log(e.target.value);
};

  return (
    <>
        <h1>Fetch Custom</h1>
        
            <input type="text" name="idPokemon" id="idPokemon" placeholder="idPokemon" className='form-control' autoComplete="off" value={pokemonId} onChange={handleInputChange}/>
        

        <h1>{isLoading && 'Cargando...'}</h1>
        <h1>{data?.name}</h1> 
    </>
  )
}

export default FecthCustom

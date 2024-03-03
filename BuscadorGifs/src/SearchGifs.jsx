import {useState} from 'react';
//import AddCategoria from './Components/AddCategoria';
//import GrillaGif from './Components/GrillaGif';


import { AddCategoria,GrillaGif } from './Components';






const SearchGifs = () => {

  const [categorias, setCategorias] = useState(['goku']);

  const addCategoria = (categoria) => {
    console.log(categoria);

    if (categorias.includes(categoria)) return;

    setCategorias([...categorias, categoria]);
  }



  return (
    <>

<h1>Busca gifs perra</h1> 
        <AddCategoria 
        // setCategorias={setCategorias} 
        onAddCategoria={(e) => addCategoria(e)}
        />
        <hr />
          {
            categorias.map( (categoria) => {
              return <GrillaGif key={categoria} category={categoria} />
            })
          }
    </>
  )
}

export default SearchGifs

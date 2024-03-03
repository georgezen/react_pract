
import {GifItem} from './GifItem';

import  useFetchGifs  from './hooksCustom/useFetchGifs';


export const GrillaGif = ({ category }) => {

  const {images,isLoading} = useFetchGifs(category);
  console.log({images,isLoading});





  return (
    <div>
      <h1>{category}</h1>
      {isLoading && (<h2>Cargando...</h2>)}
      <div className='card-grid'>
        {
          images.map((image) => {
            //return <li key={id}>{title}</li>
            return <GifItem key={image.id} {...image}/>
          })
        }
      </div>
    </div>
  )
}



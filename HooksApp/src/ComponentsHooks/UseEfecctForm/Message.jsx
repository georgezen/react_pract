import { useEffect,useState } from 'react';

const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const { x, y } = coords;

    useEffect(() => {

      const coordenadas = ({x,y}) => {
        const latitutes = { x, y };
        console.log(latitutes);
        setCoords(latitutes);
      }

      window.addEventListener('mousemove', coordenadas);
        
        return () => {
          window.removeEventListener('mousemove', coordenadas);
          console.log('limpieando coordenadas');
        }
    });

  return (
    <>
        <h3>hola pinche putita</h3> 
        <p>x: {x} y: {y}</p>
    </>
  )
}

export default Message

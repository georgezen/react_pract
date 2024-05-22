import { useState } from 'react';
import CajaNumber from './ComponentsUseStateComp/CajaNumber';
import ItemNumber from './ComponentsUseStateComp/ItemNumber';

const UseStateComp = () => {

  
  const [listValue, setListValue] = useState([]);

  const addValor = (valor) => {
    setListValue([...listValue, valor]);
  }

  return (
    <>
      <h1>multiplicando</h1>
      <div className="row">
        <div className="col-md-4 ">
          <CajaNumber onAddValor={(e) => addValor(e)}/>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <ul>
            {
              listValue.map((value) => {
                return (
                 <ItemNumber valor={value} />
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default UseStateComp
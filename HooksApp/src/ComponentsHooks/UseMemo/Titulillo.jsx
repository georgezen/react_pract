import React from 'react';

const Titulillo = React.memo(({counter}) => {

    console.log('Me volvi a generar :(');
  return (
    <>
      <h1>memo {counter}</h1>
    </>
  )
})

export default Titulillo

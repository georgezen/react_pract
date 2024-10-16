import React from 'react'

const CardPokemon = ({nombrePoke,idPoke}) => {
    return (
        <>
            <div className="container mt-2 mb-2">
                <div className="card" >

                    <div className="card-body">
                        <h5 className="card-title">{nombrePoke}</h5>
                        <p className="card-text">Numero de pokemon: {idPoke}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPokemon

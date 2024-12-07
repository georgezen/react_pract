import useCoversor from "./useCoversor";

const PageConversor = () => {

  const { dolar, isLoading, valor, handleChange, resultado, handleSubmit } = useCoversor({
    moneda: '',
    nombre: '',
    valorCambio: null
  });

  

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-8">
            <h1>Valor del dolar</h1>
            {isLoading && (<h2>Cargando...</h2>)}
            {!isLoading && <div className="fondo">

              <span className="badge badge-dark">Codigo: {dolar.moneda}</span>
              <span className="badge badge-secondary">Moneda: {dolar.nombre}</span>
              <span className="badge badge-secondary">Tipo cambio: {dolar.valorCambio}</span>

            </div>}

          </div>
          <div className="col-4">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">Cantidad a convertir</label>
                <input type="number" className="form-control" id="cantidad" name="cantidad" onChange={handleChange} value={valor}
                />

              </div>
              <div className="mb-3">
                <label className="form-label">Resultado: {resultado}</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default PageConversor

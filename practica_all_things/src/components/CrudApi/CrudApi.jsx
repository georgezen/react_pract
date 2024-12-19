import ModalAdd from "./ModalAdd/ModalAdd";
import useCrudApi from "./useCrudApi";

const CrudApi = () => {
  
  const { dataPresentations,getDataPresentation,listArticles,isLoading,addArticle } = useCrudApi();
  console.log('listArticulos',listArticles);
  

  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <div className="col-1"></div>
          <div className="col-4 mt-2">
            <h2>Crud de una Api</h2>
            <a href="#openModal" className="btn btn-primary mb-2" onClick={getDataPresentation}>Agregar</a>
            <ModalAdd propDataPresentation={dataPresentations} onDataArticle={addArticle}/>
            
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <table className="table table-border table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Descripción</th>
                    <th>Stock</th>
                    <th>Precio U.</th>
                    <th>Presentación</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {listArticles.map(({ id_article, descripcion, stock, precio_uni, presentacion }) => (
                    <tr key={id_article}>
                      <td>{id_article}</td>
                      <td>{descripcion}</td>
                      <td>{stock}</td>
                      <td>{precio_uni}</td>
                      <td>{presentacion}</td>
                      <td>
                        <button className="btn btn-success">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default CrudApi;
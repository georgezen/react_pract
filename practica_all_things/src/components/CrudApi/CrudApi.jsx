import ModalAdd from "./ModalAdd/ModalAdd";
import useCrudApi from "./useCrudApi";

const CrudApi = () => {
  const { dataPresentations, listArticles, isLoading, addArticle,borrarArticle,handleOpenModal,handleCloseModal,isModalOpen,dataArticleEdit} = useCrudApi();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4 mt-2">
            <h2>Crud de una Api</h2>
            <button className="btn btn-primary mb-2" onClick={() => handleOpenModal()}>Agregar</button>
            {isModalOpen && (
              <ModalAdd
                propDataPresentation={dataPresentations}
                onDataArticle={addArticle}
                onClose={handleCloseModal}
                dataArticleEdit={dataArticleEdit}
                isModalOpen={isModalOpen}
              />
            )}
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
                        <button className="btn btn-success" onClick={() => handleOpenModal(id_article)}>Editar</button>
                        <button className="btn btn-danger" onClick={() => borrarArticle(id_article)}>Eliminar</button>
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
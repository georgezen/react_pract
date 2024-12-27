import { useState, useEffect } from 'react';

const ModalAdd = ({ propDataPresentation, onDataArticle, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('0');
  const [dataArticle, setDataArticle] = useState({
    descripcion: '',
    stock: 0,
    precio_uni: 0,
    id_presentation: ''
  });

  useEffect(() => {
    setDataArticle(prevState => ({
      ...prevState,
      id_presentation: parseInt(selectedOption)
    }));
  }, [selectedOption]);

  const handleArticle = ({ target }) => {
    console.log(target.name);
    setDataArticle({
      ...dataArticle,
      [target.name]: target.value
    });
  }

  const handleChange = ({ target }) => {
    console.log(target.value);
    setSelectedOption(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataArticle);
    onDataArticle(dataArticle);

    setDataArticle({
      descripcion: '',
      stock: 0,
      precio_uni: 0,
      id_presentation: ''
    });
    setSelectedOption('0');
    onClose(); 
  }

  return (
    <>
      <div className="modalDialog open">
        <div className="modal-content scrolling">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLongTitle">Agregar articulo</h3>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="descripcion">Descripción</label>
                <input type="text" className="form-control" id="descripcion" name="descripcion" onChange={handleArticle} value={dataArticle.descripcion} />
              </div>
              <div className="form-group">
                <label htmlFor="stock">Stock</label>
                <input type="number" className="form-control" id="stock" name="stock" onChange={handleArticle} value={dataArticle.stock} />
              </div>
              <div className="form-group">
                <label htmlFor="precio_uni">Precio Unitario</label>
                <input type="number" className="form-control" id="precio_uni" name="precio_uni" onChange={handleArticle} value={dataArticle.precio_uni} />
              </div>
              <div className="form-group">
                <label htmlFor="id_presentation">Presentación</label>
                <select className="form-select" id="id_presentation" name="id_presentation" value={selectedOption} onChange={handleChange}>
                  <option value="0">Seleccione una presentación</option>
                  {propDataPresentation.map(({ id_presentation, descripcion }) => (
                    <option key={id_presentation} value={id_presentation}>{descripcion}</option>
                  ))}
                </select>
                <button type="submit" className="btn btn-success mt-3">Guardar</button>
              </div>
            </form>
          </div>
          <div className="modal-footer mt-2">
            <button className="btn btn-danger" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAdd;
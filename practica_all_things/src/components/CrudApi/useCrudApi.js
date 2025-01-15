import { useState, useEffect, useReducer } from "react";
import { reducerPerson } from './ModalAdd/useReducerArticle';
import { getData,saveArticle,deleteArticle,getArticleById,updateArticle } from './requests';

const initialState = [];

const useCrudApi = () => {

  const [listArticles, dispatch] = useReducer(reducerPerson, initialState);
  const [dataPresentations, setDataPresentations] = useState([]);
  const [dataArticleEdit, setDataArticleEdit] = useState({});
  const [edit, setEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const setData = () => {
    let res = getData();

    res.then(data => {
      console.log('res', data);
      const action = {
        type: 'get',
        payload: data
      }

      dispatch(action);
      setIsLoading(false);
    });
  }

  const timingData = () => {
    setTimeout(() => {
      setData();
    }, 1500);
  }

  useEffect(() => {
    timingData();
  }, []);

  const getDataPresentation = async () => {
    //Para poder pasar resultados de una consulta a otra, se debe hacer una consulta por separado y luego pasar ese resultado a otro estado para poder utilizarlo en otro componente

    const res = await fetch('http://localhost:3000/api/presentations');
    const presentaciones = await res.json();
    setDataPresentations(presentaciones);
  }

  const addArticle = async (article) => {
    console.log('article', article);

    const {id_article} = article;

    setIsLoading(true);
    if (id_article !== 0) {
      const editado = await updateArticle(article);
      console.log('editado',editado);
    }else{
      const add = await saveArticle(article);
      console.log('agregado',add);
    }
    await timingData();
    setIsLoading(false);
}

const editArticle = async (id_article) => {
  const article = await getArticleById(id_article);
  console.log(article);
  setDataArticleEdit(article);
}

const borrarArticle = async (id) => {
  console.log('id', id);
  setIsLoading(true);

  const newArticle = await deleteArticle(id);
  console.log(newArticle);

  setData();
  setIsLoading(false);
}

const handleOpenModal = (id = null) => {
  setIsModalOpen(true);
  
  // Si existe el id de articulo a editar se consulta la info
  if (id) {
    editArticle(id);
  }
  getDataPresentation();
  
  
}

const handleCloseModal = () => {
  setIsModalOpen(false);
  setDataPresentations([]);
  setDataArticleEdit({});
}





  return {
    dataPresentations,
    listArticles,
    isLoading,
    addArticle,
    borrarArticle,
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
    dataArticleEdit
    
  }
}

export default useCrudApi

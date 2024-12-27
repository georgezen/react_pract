import { useState, useEffect, useReducer } from "react";
import { reducerPerson } from './ModalAdd/useReducerArticle';
import { getData,saveArticle,deleteArticle } from './requests';

const initialState = [];

const useCrudApi = () => {

  const [listArticles, dispatch] = useReducer(reducerPerson, initialState);
  const [dataPresentations, setDataPresentations] = useState([]);
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
    setIsLoading(true);

    const newArticle = await saveArticle(article);
    console.log(newArticle);

    await timingData();
    setIsLoading(false);
};

const borrarArticle = async (id) => {
  console.log('id', id);
  setIsLoading(true);

  const newArticle = await deleteArticle(id);
  console.log(newArticle);

  await timingData();
  setIsLoading(false);
}

const handleOpenModal = () => {
  getDataPresentation();
  setIsModalOpen(true);
}

const handleCloseModal = () => {
  setIsModalOpen(false);
}





  return {
    dataPresentations,
    getDataPresentation,
    listArticles,
    isLoading,
    addArticle,
    borrarArticle,
    handleOpenModal,
    handleCloseModal,
    isModalOpen
  }
}

export default useCrudApi

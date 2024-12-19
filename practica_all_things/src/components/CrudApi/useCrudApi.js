import { useState, useEffect,useReducer } from "react";
import {reducerPerson} from './ModalAdd/useReducerArticle';

const initialState = [];

const useCrudApi = () => {

    const [listArticles, dispatch] = useReducer(reducerPerson, initialState);
    const [dataPresentations, setDataPresentations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
  
    useEffect(() => {
  
      const getData = async () => {
        const res = await fetch('http://localhost:3000/api/articles');
        const users = await res.json();

        const action = {
            type: 'get',
            payload: users.data
        }

        dispatch(action);
        setIsLoading(false);
      }
  
      setTimeout(() => {
        getData();
      }, 1500);
    }, []);
  
    const getDataPresentation = async () => {
      //Para poder pasar resultados de una consulta a otra, se debe hacer una consulta por separado y luego pasar ese resultado a otro estado para poder utilizarlo en otro componente
  
      const res = await fetch('http://localhost:3000/api/presentations');
      const presentaciones = await res.json();
      setDataPresentations(presentaciones);
    }

    const addArticle =  (article) => {
        console.log('article',article);
    }


  return{
    dataPresentations,
    getDataPresentation,
    listArticles,
    isLoading,
    addArticle
  }
}

export default useCrudApi

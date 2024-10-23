import { useEffect, useState } from 'react';
const cache = {};


const useFetch = (pokemon = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const [estado, setEstado] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        if (!pokemon) return;
        fetchData();
    }, [pokemon]);

    const fetchData = async () => {
        if (cache[url]) {
            setEstado({
                data: cache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        
        initialState();
        
        const res = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 500));
        if (!res.ok) {
            setEstado({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: res.status,
                    message: res.statusText
                }
            });
            return;
        }
        const data = await res.json();

        setEstado({
            data,
            isLoading: false,
            hasError: false,
            error: null
        });

        cache[url] = data;
    
    }


    const initialState = () => {
        setEstado({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    

    return {
        data: estado.data,
        isLoading: estado.isLoading,
        hasError: estado.hasError

    }
}

export default useFetch

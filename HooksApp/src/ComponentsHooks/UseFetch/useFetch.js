import { useEffect, useState } from 'react';

const useFetch = (pokemon = 1) => {

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
        initialState();
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);

        await new Promise(resolve => setTimeout(resolve, 1000));
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

        console.log(data);

        setEstado({
            data,
            isLoading: false,
            hasError: false,
            error: null
        });
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

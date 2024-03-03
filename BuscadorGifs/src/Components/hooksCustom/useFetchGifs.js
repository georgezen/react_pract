import { useEffect, useState } from 'react';
import { processGifts } from '../Service';

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifs = async () => {
        const dataGifts = await processGifts(category);
        setImages(dataGifts);
        setIsLoading(false);
    }

    useEffect(() => {
        getGifs();
    }
        , []);

    return {
        images,
        isLoading
    }
}

export default useFetchGifs

export const processGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gpvS12FctGgYIV6qoBGz48Fqxrnqi1eF&q=${category}&limit=6`;
    
    
    const res = await fetch(url);
    const {data} = await res.json();
   
    const gifs = data.map( (gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    
    return gifs;
  }





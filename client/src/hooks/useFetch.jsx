import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState('');

  const fetchGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(' ').join('')}&limit=1`)
      const { data } = await response.json();
      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setGifUrl('https://media2.giphy.com/media/aNFT7eG2rIKK715uLk/giphy.gif?cid=5f459b0f71fv7j0ymtgjcuhsoyp1k06t4n50w7u95u64qy5v&rid=giphy.gif&ct=g')
    }
  }

  useEffect(() => {
    if(keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
}

export default useFetch;
import axios from 'axios';
const apiKey = '1a5dcaecfd6daccf99bd5443101f6b7d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${apiKey}`);
  return data;
};
export const searchFilm = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
  );
  return data;
};

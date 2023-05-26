import axios from 'axios';
const API_KEY = 'e98410c25baf2ff3de686d97b54c3d86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovieDetails = async id => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en_US',
  };
  // console.log('ID:', id);
  // console.log('Request URL:', `/movie/${id}`);
  const response = await axios.get(`/movie/${id}`, { params });
  return response.data;
};

export const fetchTrendingMovies = async () => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const response = await axios.get('/trending/movie/day', { params });
  return response.data.results;
};

export const fetchSearchMovies = async query => {
  const params = {
    api_key: API_KEY,
    query: query,
    page: 1,
  };
  const response = await axios.get('/search/movie', { params });
  return response.data.results;
};

export const fetchMovieCredits = async id => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const response = await axios.get(`/movie/${id}/credits`, { params });
  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const response = await axios.get(`/movie/${id}/reviews`, { params });
  return response.data.results;
};

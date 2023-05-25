import axios from 'axios';
const API_KEY = 'e98410c25baf2ff3de686d97b54c3d86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMoviePoster = async posterPath => {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const posterSize = 'w500'; // Измените размер в соответствии с вашими требованиями

  const imageUrl = `${baseUrl}${posterSize}${posterPath}`;

  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const base64Image = Buffer.from(response.data, 'binary').toString('base64');

  return `data:image/jpeg;base64,${base64Image}`;
};

export const fetchMovieDetails = async id => {
  const params = {
    api_key: API_KEY,
  };

  const response = await axios.get(`/movie/${id}`, { params });
  const movieDetails = response.data;

  if (movieDetails.poster_path) {
    const poster = await fetchMoviePoster(movieDetails.poster_path);
    movieDetails.poster = poster;
  }

  return movieDetails;
};

export const fetchTrendingMovies = async () => {
  const params = {
    api_key: API_KEY,
  };
  const response = await axios.get('/trending/movie/day', { params });
  return response.data.results;
};

export const fetchSearchMovies = async query => {
  const params = {
    api_key: API_KEY,
    query: query,
  };
  const response = await axios.get('/search/movie', { params });
  return response.data.results;
};

export const fetchMovieCredits = async id => {
  const params = {
    api_key: API_KEY,
  };
  const response = await axios.get(`/movie/${id}/credits`, { params });
  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const params = {
    api_key: API_KEY,
  };
  const response = await axios.get(`/movie/${id}/reviews`, { params });
  return response.data.results;
};

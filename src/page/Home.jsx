import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'serveses/api';
import MoviesList from '../components/MoviesList/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(fetchMovies => {
        setMovies(fetchMovies);
      })
      .catch(error => {
        console.log(error);
        setMovies([]);
      });
  }, []);

  return (
    <div>
      <h2>Найпопулярніші фільми</h2>
      {movies.length && (
        <div>
          <MoviesList movies={movies}></MoviesList>
        </div>
      )}
    </div>
  );
}

export default Home;

import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'serveses/api';
import MoviesList from './MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Найпопулярніші фільми</h2>
      {movies.length && (
        <div>
          <ul style={{ listStyle: 'none' }}>
            {movies.map(({ id, title }) => (
              <MoviesList key={id} title={title}></MoviesList>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;

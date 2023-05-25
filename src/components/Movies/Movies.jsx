import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchMovies } from 'serveses/api';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const resultsSearchMovies = await fetchSearchMovies(query);
      setMovies(resultsSearchMovies);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      searchMovies();
    }
  };

  return (
    <div>
      <h2>Пошук кінофільмів</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={searchMovies}>Пошук</button>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}

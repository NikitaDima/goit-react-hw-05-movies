import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'serveses/api';

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    performSearch();
  };

  const performSearch = () => {
    fetchSearchMovies(query)
      .then(searchMovies => {
        setMovies(searchMovies);
        updateQueryString(query);
      })
      .catch(error => {
        console.log(error);
        setMovies([]);
      });
  };

  useEffect(() => {
    const queryParam = searchParams.get('query') ?? '';
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [searchParams]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { query: name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <h2>Пошук кінофільмів</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Пошук</button>
      </form>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Movies;

import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'serveses/api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const queryParam = searchParams.get('query') ?? '';
  const location = useLocation();

  const performSearch = () => {
    fetchSearchMovies(query)
      .then(searchMovies => {
        setMovies(searchMovies);
      })
      .catch(error => {
        console.log(error);
        setMovies([]);
      });
  };

  useEffect(() => {
    setMovies([]);

    if (queryParam !== '') {
      fetchSearchMovies(queryParam)
        .then(searchMovies => {
          setMovies(searchMovies);
        })
        .catch(error => {
          console.log(error);
          setMovies([]);
        });
    }
    return setMovies([]);
  }, [queryParam]);

  const handleOnSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }

    performSearch();
  };

  const updateQueryString = e => {
    if (e.target.value === '') {
      setQuery('');
      return setSearchParams({});
    }
    setQuery(e.target.value);
    setSearchParams({ query: e.target.value });
  };
  // const visibleProducts = movies.filter(movie =>
  //   movie.name.toLowerCase().includes(queryParam.toLowerCase())
  // );

  return (
    <div>
      <h2>Пошук кінофільмів</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={query} onChange={updateQueryString} />
        <button type="submit">Пошук</button>
      </form>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Movies;

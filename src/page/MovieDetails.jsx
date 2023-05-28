import { useEffect, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'serveses/api';

import css from './MovieDetails.module.css';

const imageUrl = 'https://image.tmdb.org/t/p/w300';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(id)
      .then(fetchDetails => {
        setMovie(fetchDetails);
      })
      .catch(error => {
        console.log(error);
        setMovie([]);
      });
  }, [id]);

  return (
    <main>
      <section className={css.container}>
        <div className={css.wrapper}>
          <button className={css.btn}>
            <Link to={location.state.from}>Go back</Link>
          </button>
          {movie.poster_path && (
            <img
              className={css.poster}
              src={imageUrl + movie.poster_path}
              alt={movie.title}
            />
          )}
        </div>
        <div>
          {movie && <h2 className={css.title}>{movie.title}</h2>}
          <p>User scor: {movie.vote_average}</p>
          <h3 className={css.overview}>Overview</h3>
          {movie.overview && <p>{movie.overview}</p>}
          <h3 className={css.genres}>Genres</h3>
          {movie.genres && (
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </main>
  );
}

export default MovieDetails;

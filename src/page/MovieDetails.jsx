import { useEffect, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'serveses/api';

import css from './MovieDetails.module.css';

const imageUrl = 'https://image.tmdb.org/t/p/w300';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const back = location.state?.from ?? '/';

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
            <Link to={back}>Go back</Link>
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
          <p>User Score: {movie.vote_average * 10}%</p>
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
            <Link to="cast" state={{ from: back }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: back }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </main>
  );
}

export default MovieDetails;

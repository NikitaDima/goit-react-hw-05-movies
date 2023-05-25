import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { fetchMovieDetails } from 'serveses/api';

function MovieDetails() {
  const { id } = useParams;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(id);
        setMovie(movieDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!movie) {
    return <div>Завантаження...</div>;
  }

  return (
    <main>
      <h2>{movie.title}</h2>
      {movie.poster && <img src={movie.poster} alt={movie.title} />}
      <p>{movie.overview}</p>
      <p>Рейтинг: {movie.vote_average}</p>
      <p>Дата виходу: {movie.release_date}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </main>
  );
}

export default MovieDetails;

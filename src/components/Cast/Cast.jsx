import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'serveses/api';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(id)
      .then(fetchCredits => {
        setCast(fetchCredits);
      })
      .catch(error => {
        console.log(error);
        setCast([]);
      });
  }, [id]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.map(actor => (
        <div key={actor.id}>
          <img src={imageUrl + actor.profile_path} alt={actor.name} />
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
}

export default Cast;

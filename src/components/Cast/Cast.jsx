import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'serveses/api';

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
      <h2>Акторський склад</h2>
      {cast.map(actor => (
        <div key={actor.id}>
          <h3>{actor.name}</h3>
          <p>Персонаж: {actor.character}</p>
        </div>
      ))}
    </div>
  );
}

export default Cast;

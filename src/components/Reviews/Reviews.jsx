import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'serveses/api';

export default function Reviews({ match }) {
  const { id } = useParams;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const movieReviews = fetchMovieReviews(id);
        setReviews(movieReviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div>
      <h2>Огляди</h2>
      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}

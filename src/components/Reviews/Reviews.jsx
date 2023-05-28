import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'serveses/api';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(id)
      .then(fetchReviews => {
        setReviews(fetchReviews);
      })
      .catch(error => {
        console.log(error);
        setReviews([]);
      });
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

export default Reviews;

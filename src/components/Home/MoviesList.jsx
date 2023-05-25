import { Link } from 'react-router-dom';

const MoviesList = ({ id, title }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

export default MoviesList;

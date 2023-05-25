import { Routes, Route, NavLink } from 'react-router-dom';

import Cast from './Cast';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/movies" element={<Movies></Movies>} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails></MovieDetails>}
        ></Route>
        <Route path="/movies/:movieId/cast" element={<Cast></Cast>}></Route>
        <Route
          path="/movies/:movieId/reviews"
          element={<Reviews></Reviews>}
        ></Route>
      </Routes>
    </div>
  );
};

import { Routes, Route } from 'react-router-dom';

import Cast from './Cast';
import Home from 'page/Home';
import MovieDetails from 'page/MovieDetails';
import Movies from 'page/Movies';
import Reviews from './Reviews';
import NoFound from 'page/NoFound';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Route>
    </Routes>
  );
};

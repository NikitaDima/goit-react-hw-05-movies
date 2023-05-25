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
        <Route path="/movies/:movieId" element={<MovieDetails></MovieDetails>}>
          <Route path="cast" element={<Cast></Cast>} />
          <Route path="reviews" element={<Reviews></Reviews>} />
        </Route>
      </Routes>
    </div>
    // <Routes>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Домашня сторінка</Link>
    //         </li>
    //         <li>
    //           <Link to="/movies">Пошук кінофільмів</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* <Switch> */}
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/movies" component={Movies} />
    //     <Route exact path="/movies/:movieId" component={MovieDetails} />
    //     <Route exact path="/movies/:movieId/cast" component={Cast} />
    //     <Route exact path="/movies/:movieId/reviews" component={Reviews} />
    //     {/* <Redirect to="/" /> */}
    //     {/* </Switch> */}
    //   </div>
    // </Routes>
  );
};

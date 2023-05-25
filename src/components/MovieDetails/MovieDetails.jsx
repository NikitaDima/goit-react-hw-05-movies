// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// const API_KEY = 'myKey';

// export default function MovieDetails({ match }) {
//   const movieId = match.params.movieId;
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
//         );
//         setMovie(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   if (!movie) {
//     return <div>Завантаження...</div>;
//   }

//   return (
//     <main>
//               <h2>{movie.title}</h2>
//       <p>{movie.overview}</p>
//       <p>Рейтинг: {movie.vote_average}</p>
//       <p>Дата виходу: {movie.release_date}</p>
//       <ul>
//         <li>
//             <Link></Link>
//         </li>
//         <li>
//             <Link></Link>
//         </li>
//       </ul>
//     </main>
//   );
// }

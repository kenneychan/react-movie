import "./MovieDetailPage.css";
import MovieCard from "../../components/MovieCard";
import { useParams } from 'react-router-dom'

export default function MoviesDetailPage({movies}) {
  const { movieTitle } = useParams();

  const movie = movies.find((movie) => movie.title === movieTitle);
  const index = movies.indexOf(movie);

  return (
    <main className="MoviesListPage">
      <h1>MoviesDetailPage</h1>
      <MovieCard movie={movie} index={index} key={index} />
    </main>
  );
}


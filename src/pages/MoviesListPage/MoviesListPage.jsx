import Grid from '@mui/material/Grid';
import "./MoviesListPage.css";
import MovieCard from "../../components/MovieCard";

export default function MoviesListPage({movies}) {

  return (
    <main className="MoviesListPage">
      <h1>MoviesListPage</h1>
      <Grid container spacing={4}>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} index={index} key={index} movies={movies}/>
        ))}
      </Grid>
    </main>
  );
}


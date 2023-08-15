import Grid from '@mui/material/Grid';
import "./ActorsListPage.css";
import ActorCard from "../../components/ActorCard";

export default function MoviesListPage({movies}) {
  function getActorList(movies) {
    const actors = []
    for (let i = 0; i < movies.length; i++) {
      actors.push(...movies[i].cast)
      // console.log('actors', actors)
    }
    // console.log ('set', new Set(actors))
    // console.log ('array', Array.from(new Set(actors)))
    return Array.from(new Set(actors)).sort() 
  }

  return (
    <main className="MoviesListPage">
      <h1>MoviesListPage</h1>
      <Grid container spacing={4}>
        {getActorList(movies).map((actor, index) => (
          <ActorCard actor={actor} index={index} key={index} />
        ))}
      </Grid>
    </main>
  );
}


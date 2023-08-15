// --- Imports --- //
import React from "react";
import { Link } from 'react-router-dom';

// --- Material Ui Imports --- //
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import Box from "@mui/material/Box";

// --- Fill Image Card Component Imports --- //
import {
  FiCard,
  FiCardActionArea,
  FiCardContent,
  FiCardMedia
} from "./FullImageCard";

// --- Style --- //
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 345
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 140
  },

  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)"
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  }
});

export default function MovieCard({ movie, index, movies}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* Full Image Card Demo */}
      <Box my={4}>
        <Typography variant="h6" paragraph align="center">
          <Link to={"/movies/"+movie?.title}>{movie?.title}</Link>
        </Typography>
        <FiCard className={classes.card}>
          <FiCardActionArea>
            <FiCardMedia
              media="picture"
              alt="Contemplative Reptile"
              image={movie.posterPath}
              title="Contemplative Reptile"
            />
            <FiCardContent className={classes.fiCardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.releaseDate}
              </Typography>
              <Typography
                variant="body2"
                className={classes.fiCardContentTextSecondary}
                component="p"
              >
                {movie.cast.join(", ")}
              </Typography>
            </FiCardContent>
          </FiCardActionArea>
        </FiCard>
      </Box>
    </div>
  );
}
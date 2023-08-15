
// --- Imports --- //
import React from "react";

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
    height: 240
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
export default function ActorCard({ actor, index, key }) {
  function randomSeed () {
    return Math.floor(Math.random() * 100);
  }

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* Full Image Card Demo */}
      <Box my={4}>
        <Typography variant="h6" paragraph align="center">
          {actor}
        </Typography>
        <FiCard className={classes.card}>
          <FiCardActionArea>
            <FiCardMedia
              media="picture"
              alt="Contemplative Reptile"
              image={"https://picsum.photos/id/" + randomSeed() + "/200/300"}
              title="Contemplative Reptile"
            />
            <FiCardContent className={classes.fiCardContent}>
            </FiCardContent>
          </FiCardActionArea>
        </FiCard>
      </Box>
    </div>
  );
}

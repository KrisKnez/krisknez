import React from "react";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import StandardPage from "../../Templates/StandardPage";

import Styles from "./Projects.module.css";

const ProjectsPage = () => {
  return (
    <StandardPage>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <div className={Styles.CardMediaContainer}>
                  <CardMedia
                    image="/logo.png"
                    className={Styles.CardMedia}
                  ></CardMedia>
                </div>
              </Grid>
              <Grid item xs={12} sm={9}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    KrisKnez.com
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </StandardPage>
  );
};

export default ProjectsPage;

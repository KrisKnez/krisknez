import React from "react";

import {Grid, Paper, Box, Card, CardMedia, CardContent, CardActionArea, Typography, Button} from "@material-ui/core";

import Styles from "./Projects.module.css";

const Projects = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper>
          <Box px={2} py={1}>
            <Typography variant="h6">Projects</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <div className={Styles.CardImageContainer}>
                  <div className={Styles.CardImageBackground}></div>
                  <CardMedia
                    image="/logo.png"
                    title="Contemplative Reptile"
                    className={Styles.CardImage}
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    KrisKnez.com
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <div className={Styles.CardImageContainer}>
                  <div className={Styles.CardImageBackground}></div>
                  <CardMedia
                    image="/soon.jpg"
                    title="Contemplative Reptile"
                    className={Styles.CardImage}
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Coming soon
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <div className={Styles.CardImageContainer}>
                  <div className={Styles.CardImageBackground}></div>
                  <CardMedia
                    image="/soon.jpg"
                    title="Contemplative Reptile"
                    className={Styles.CardImage}
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Coming soon
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              View All Projects
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;

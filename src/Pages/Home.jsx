import React from "react";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActionArea,
  Paper,
  Container,
  Box,
} from "@material-ui/core";

import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Container maxWidth="md">
        <Box mt={2}>
          <Card style={{ display: "flex", flexDirection: "column" }}>
            <Grid container>
              <Grid item xs={12} sm={3} md={3}>
                <CardMedia
                  image="/profile.jpg"
                  title="Live from space album cover"
                  style={{ paddingTop: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={9} md={9}>
                <CardContent>
                  <Typography component="h5" variant="h5">
                    Kristijan Knezevic
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Studying Computer Science at FESB University<br></br>
                    Low Web Development
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Box mt={3}>
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
                      <CardMedia
                        image="/logo.png"
                        title="Contemplative Reptile"
                        style={{width: "100%", paddingTop: "100%"}}
                      />
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
                      <CardMedia
                        image="/profile.jpg"
                        title="Contemplative Reptile"
                        style={{width: "100%", marginTop: "50%"}}
                      />
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
                      <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          KrisKnez.com
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;

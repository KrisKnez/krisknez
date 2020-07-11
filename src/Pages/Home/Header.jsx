import React from "react";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import SchoolIcon from "@material-ui/icons/School";

import Styles from "./Header.module.css";

const Header = () => {
  return (
    <Card style={{ display: "flex", flexDirection: "column" }}>
      <Grid container>
        <Grid item xs={12} sm={4} md={3}>
          <CardMedia
            image="/profile.jpg"
            className={Styles.ProfileImage}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <CardContent>
            <Typography component="h5" variant="h5">
              Kristijan Knezevic
            </Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SchoolIcon></SchoolIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Computer Science, FESB University"
                  secondary="Since 2018."
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SchoolIcon></SchoolIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Srednja Skola Hvar"
                  secondary="From 2014. to 2018."
                />
              </ListItem>
            </List>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Header;

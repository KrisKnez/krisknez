import React from "react";

import {
  Box,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Avatar,
} from "@material-ui/core";

import Styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <AppBar position="static" style={{background: "#333"}}>
      <Container maxWidth="md">
        <Toolbar style={{ padding: "10px 0" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm="auto" style={{flexGrow: "1"}}>
              <Avatar
                variant="square"
                src="/logo.png"
                className={Styles.Logo}
              ></Avatar>
            </Grid>
            <Grid item xs={12} sm={"auto"} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Contact</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

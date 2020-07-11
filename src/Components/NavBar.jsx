import React from "react";

import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Container,
  Avatar,
} from "@material-ui/core";

import Styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <AppBar position="static" style={{ background: "#333" }}>
      <Container maxWidth="md">
        <Toolbar style={{ padding: "10px 0" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm="auto" style={{ flexGrow: "1" }}>
              <Avatar
                variant="square"
                src="/logo.png"
                className={Styles.Logo}
              ></Avatar>
            </Grid>
            <Grid
              item
              xs={12}
              sm={"auto"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button href="/" color="inherit">
                Home
              </Button>
              <Button href="/projects" color="inherit">
                Projects
              </Button>
              <Button href="/contact" color="inherit">
                Contact
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

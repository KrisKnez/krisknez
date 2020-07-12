import React from "react";

import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Container,
  Avatar,
} from "@material-ui/core";

import { Link } from "react-router-dom";

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
              <Button color="inherit">
                <Link
                  to="/"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/projects"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  Projects
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

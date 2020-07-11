import React from "react";

import { Grid } from "@material-ui/core";

import StandardPage from "../../Templates/StandardPage";

import Header from "./Header";
import Projects from "./Projects";

import Styles from "./Home.module.css";

const Home = () => {
  return (
    <StandardPage>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
      </Grid>
    </StandardPage>
  );
};

export default Home;

import React from "react";

import { Container, Box } from "@material-ui/core";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const StandardPage = (props) => {
  console.log(props);
  return (
    <>
      <NavBar></NavBar>
      <Container maxWidth="md">
        <Box my={2}>{props.children}</Box>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default StandardPage;

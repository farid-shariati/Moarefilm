import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/";
import { Container, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1000px",
    backgroundColor: theme.palette.background.default,
    padding: "0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      maxWidth: "1350px",
      padding: "55px 55px 25px 55px",
    },
  },
}));

function Layout(props: any) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Navbar />
      {props.children}
      <Footer />
    </Container>
  );
}

export default Layout;

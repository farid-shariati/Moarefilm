import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Box } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import { NavLink, Link } from "react-router-dom";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Brand: {
      textDecoration: "none",
      color: "white !important",
      fontWeight: "bold",
      fontSize: 20,
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.action.hover,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 30,
      },
    },
    videoIcon: {
      width: 25,
      height: 35,
      color: theme.palette.primary.main,
      [theme.breakpoints.up("md")]: {
        width: 35,
        height: 40,
      },
    },
    items: {
      fontSize: 20,
      color: theme.palette.primary.main,
      textDecoration: "none",
      display: "ruby",
      margin: "20px",
      "&:hover": {
        color: theme.palette.action.hover,
      },
    },
    loginItem: {
      fontSize: 20,
      color: theme.palette.primary.main,
      textDecoration: "none",
      margin: "0 20px",
      "&:hover": {
        color: theme.palette.action.hover,
      },
    },
    navbar: {
      padding: 20,
      position: "absolute",
      flexGrow: 1,
      width: "100%",
      height: 50,
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        display: "contents",
        position: "reletive",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        flex: 1,
        alignItems: "center",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    close: {
      color: "#fff",
      width: 80,
      height: 60,
      float: "right",
    },
    links: {
      position: "relative",
      top: "20%",
      width: "100%",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      listStyle: "none",
      textAlign: "center",
    },
    link: {
      margin: 10,
      fontSize: 22,
      color: "#fff",
      textDecoration: "none",
      "&:hover": {
        color: "black",
      },
    },
    account: {
      position: "relative",
      top: 20,
      left: 30,
      display: "flex",
      fontWeight: 500,
      fontSize: 20,
    },
    accounticon: {
      width: 35,
      height: 30,
      color: theme.palette.primary.main,
    },
  })
);

export default function Navbar() {
  const [drawerOpen, setdrawerOpen] = useState(false);
  const toggleDrawer = (value: boolean) => {
    setdrawerOpen(value);
  };
  const classes = useStyles();

  return (
    <Box className={classes.navbar}>
      <Toolbar style={{ padding: 0 }}>
        <Box style={{ flex: "1" }}>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <Link className={classes.Brand} to="/">
              MOAREFILM
            </Link>
            <TheatersIcon className={classes.videoIcon} />
          </Typography>
        </Box>
        <Box className={classes.sectionDesktop}>
          <Box
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink className={classes.items} to="/Search">
              Search
            </NavLink>
            <NavLink className={classes.items} to="/Movies">
              Movies
            </NavLink>
            <NavLink className={classes.items} to="/TVMovies">
              TV Showes
            </NavLink>
          </Box>
          <Box style={{ display: "flex" }}>
            <NavLink className={classes.loginItem} to="/Login">
              Login
            </NavLink>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.themoviedb.org/signup"
            >
              <Button color="primary" size="small" variant="contained">
                Join Us
              </Button>
            </a>
          </Box>
        </Box>
        <Box className={classes.sectionMobile}>
          <IconButton
            onClick={() => toggleDrawer(true)}
            style={{ color: "red" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <MobileNavbar open={drawerOpen}>
        <Box style={{ width: "100vw", height: "500vw", background: "#524a48" }}>
          <IconButton
            onClick={() => toggleDrawer(false)}
            className={classes.close}
          >
            <CloseIcon style={{ width: 40, height: 40 }} />
          </IconButton>
          <Box className={classes.account}>
            <AccountCircleIcon className={classes.accounticon} />
            hi, Peymanhc
          </Box>
          <Box className={classes.links}>
            <NavLink
              onClick={() => toggleDrawer(false)}
              className={classes.link}
              to="/Search"
            >
              Search
            </NavLink>
            <NavLink
              onClick={() => toggleDrawer(false)}
              className={classes.link}
              to="/Movies"
            >
              Movies
            </NavLink>
            <NavLink
              onClick={() => toggleDrawer(false)}
              className={classes.link}
              to="/TVMovies"
            >
              TV Showes
            </NavLink>
          </Box>
        </Box>
      </MobileNavbar>
    </Box>
  );
}

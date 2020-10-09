import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Box, Typography } from "@material-ui/core";
interface Props {
  title: string;
  Subtext: string;
  button: string;
  img: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Header: {
      margin: "auto",
      width: "100%",
      height: 400,
      [theme.breakpoints.up("md")]: {
        height: 500,
      },
    },
    Headerimg: {
      background:
        "linear-gradient(90deg, rgba(23,19,51,0.7357143541010154) 0%, rgba(10,0,0,0.8421569311318278) 33%, rgba(57,0,0,0.5172269591430323) 73%);",
      width: "100%",
      height: 400,
      objectFit: "cover",
      [theme.breakpoints.up("md")]: {
        height: 500,
      },
    },
    Title: {
      textAlign: "center",
    },
    editIcon: {
      float: "right",
      color: theme.palette.primary.main,
      border: "none",
      backgroundColor: "transparent",
      width: 30,
      height: 30,
      margin: 20,
      cursor: "pointer",
    },
    headbutton: {
      display: "flex",
      margin: "50px auto",
      [theme.breakpoints.down("md")]: {
        marginTop: "30px",
      },
    },
    headertitle: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: 300,
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        height: 400,
      },
    },
    editIconBox: {
      position: "relative",
      [theme.breakpoints.down(960)]: {
        top: "80%",
      },
    },
  })
);
const Banner = (props: Props) => {
  const classes = useStyles();

  return (
    <Box style={{ background: `url(${props.img})` }} className={classes.Header}>
      <Box className={classes.Headerimg}>
        <Box className={classes.editIconBox}>
          <Button className={classes.editIcon}>
            <EditIcon />
          </Button>
        </Box>
        <Box className={classes.headertitle}>
          <Typography variant="h3" className={classes.Title}>
            {props.title}
          </Typography>
          <Button
            className={classes.headbutton}
            color="primary"
            size="large"
            variant="contained"
          >
            {props.button}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

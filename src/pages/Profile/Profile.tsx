import React, { ReactElement } from "react";
import ProfileImg from "../../images/img19.jpg";
import post from "../../images/img9.jpg";
import { makeStyles } from "@material-ui/styles";
import Categories from "../../components/Categories";
import Favourite from "../../components/FavouriteMovies";
import { Box, Typography, Theme, createStyles, Grid } from "@material-ui/core";
import ProfileHeader from "../../components/ProfileHeader";

const Items = [
  {
    title: "Video Title",
    rate: 5,
  },
  {
    title: "peymanhc",
    rate: 5,
  },
  {
    title: "Aladdin",
    rate: 5,
  },
  {
    title: "Walking Dead",
    rate: 5,
  },
  {
    title: "See",
    rate: 5,
  },
  {
    title: "Mamad Nood",
    rate: 5,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      padding: "30px 0px",
      [theme.breakpoints.down(960)]: {
        fontSize: "18px",
      },
    },
    titleBox: {
      [theme.breakpoints.down(960)]: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    items: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: "auto",
      marginTop: 20,
    },
    mainItems: {
      [theme.breakpoints.down(960)]: {
        padding: "30px",
      },
    },
  })
);

function Profile(): ReactElement {
  const classes = useStyles();
  return (
    <Box>
      <ProfileHeader
        title={"Peyman Hadavi"}
        Subtext=""
        button={"Log Out"}
        img={ProfileImg}
      />
      <Box className={classes.mainItems}>
        <Box className={classes.titleBox}>
          <Typography variant="h3" className={classes.title}>
            Movies Based On Your Taste
          </Typography>
          <Categories />
        </Box>
        <Box className={classes.items}>
          <Grid container spacing={3}>
            {Items.map((item: any, i: number) => {
              return (
                <Favourite
                  key={i}
                  rate={item.rate}
                  title={item.title}
                  image={post}
                  describtion=""
                  hight={350}
                />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;

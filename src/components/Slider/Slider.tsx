import React from "react";
import CastCard from "../CastCard/CastCard";
import { Box, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  nextbtn: {
    zIndex: 99,
    background: theme.palette.primary.main,
    width: 30,
    height: 30,
    border: "none",
    color: "#000",
    position: "absolute",
    right: 0,
    top: 90,
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  prev: {
    zIndex: 99,
    background: theme.palette.primary.main,
    width: 30,
    height: 30,
    border: "none",
    color: "#000",
    position: "absolute",
    left: "10px",
    top: 90,
    cursor: "pointer",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  slide: {
    marginTop: 20,
    marginLeft: -10,
  },
}));

interface Props {
  Creators?: any;
}

const Slide: React.FC<Props> = ({ Creators }) => {
  const classes = useStyles();
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w780";
  const params = {
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      1340: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      370: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <Box className={classes.slide}>
      <Swiper {...params}>
        {Creators.Creators
          ? Creators.Creators.cast.map((cast: any) => (
              <Box key={cast.id}>
                <CastCard
                  id={cast.id}
                  name={cast.name}
                  image={
                    cast.profile_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${cast.profile_path}`
                      : require("../../images/profile.png")
                  }
                />
              </Box>
            ))
          : ""}
      </Swiper>
    </Box>
  );
};

export default Slide;

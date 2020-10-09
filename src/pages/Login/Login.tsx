import React, { useEffect, useState } from "react";
import { Typography, Theme, Button, Hidden, Box } from "@material-ui/core";
import LoginRegisterPoster from "../../components/LoginRegisterPoster/LoginRegisterPoster";
import HeaderBanner from "../../images/img19.jpg";
import { makeStyles } from "@material-ui/styles";
import { Input, Password } from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import axios from "../../shared/axios-datas";
import { doLogin } from "../../Redux/Actions/Auth";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    flex: 1,
    marginTop: 50,
    display: "contents",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  poster: {
    flex: 1,
  },
  form: {
    padding: "0px 20px",
    [theme.breakpoints.up("md")]: {
      padding: "0px !important",
    },
  },
  title: {
    marginTop: -15,
    marginBottom: "20px",
    fontWeight: "bold",
  },
  bottomform: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-end",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      height: 270,
      display: "flex",
    },
  },
  bottom: {
    display: "flex",
    width: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      flexDirection: "unset",
    },
  },
  Loginbtn: {
    width: "100%",
    marginBottom: 15,
    [theme.breakpoints.up("md")]: {
      width: 120,
      float: "right",
    },
  },
  inputbase: {
    boxShadow: `0px 1px 0px ${theme.palette.primary.main}`,
  },
}));
const Login = () => {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  const [requestToken, setrequestToken] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        setrequestToken(res.data.request_token);
      });
  }, []);
  const onSubmit = (values: any) => {
    values.request_token = requestToken;
    dispatch(doLogin(values));
  };
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.poster}>
        <Hidden smDown={true}>
          <LoginRegisterPoster
            img={HeaderBanner}
            title={
              <p>
                Moarfilm will help you find the best movies for{" "}
                <b>your taste</b>
              </p>
            }
            subTitle={
              <p>
                no more <b>wasting time</b> seaching around :)
              </p>
            }
          />
        </Hidden>
      </Box>
      <Box className={classes.poster}>
        <Box className={classes.form}>
          <Typography className={classes.title} color="primary" variant="h3">
            Login
          </Typography>
          <Box className={classes.inputbase}>
            <Input inputref={register} name="username" />
          </Box>
          <Box className={classes.inputbase}>
            <Password inputref={register} Password="password" />
          </Box>
          <Box className={classes.bottomform}>
            <Box className={classes.bottom}>
              <Typography color="primary" variant="body2">
                forgot password?
              </Typography>
              <Button
                onClick={handleSubmit(onSubmit)}
                className={classes.Loginbtn}
                color="primary"
                variant="contained"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

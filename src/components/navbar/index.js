import React, { useContext } from "react";
import {
  Toolbar,
  Typography,
  Paper,
  InputBase,
  Button,
} from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import logo from "../../assets/lubindo.png";
import Carousel from "../carousel";
import { Context } from "../../context/globalState";

export const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { refCode } = useContext(Context);

  return (
    <>
      <Paper className={classes.navbar}>
        <Toolbar className={classes.navContent}>
          <img src={logo} alt="Lubindo" />
          {!localStorage.getItem("access_token") ? (
            <Typography variant="h6" className={classes.text}>
              <Button
                className={classes.button}
                onClick={() =>
                  history.push(refCode ? `/login?ref=${refCode}` : "/login")
                }
              >
                Log in
              </Button>
              /
              <Button
                className={classes.button}
                onClick={() =>
                  history.push(
                    refCode ? `/register?ref=${refCode}` : "/register"
                  )
                }
              >
                Daftar
              </Button>
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.text}>
              <Button
                className={classes.button}
                onClick={() =>
                  history.push(refCode ? `/profile?ref=${refCode}` : "/profile")
                }
              >
                Profile
              </Button>
            </Typography>
          )}
        </Toolbar>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.5rem",
          }}
        >
          <Paper className={classes.search}>
            <InputBase
              placeholder="cari kebutuhan kamu"
              className={classes.searchContent}
            />
            <SearchRounded className={classes.searchContent} />
          </Paper>
        </form>
        <Carousel />
      </Paper>
    </>
  );
};

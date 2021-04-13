import React from "react";
import { Toolbar, Typography, Paper, InputBase, Button } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import logo from '../../assets/lubindo.png'

export const Navbar = () => {
  const classes = useStyles();
  const history = useHistory()
  return (
    <Paper className={classes.navbar}>
      <Toolbar className={classes.navContent}>
        <img
          src={logo}
          alt="Lubindo"
        />
        <Typography variant="h6" className={classes.text}>
          <Button className={classes.button} onClick={()=>history.push('/login')}>Log in</Button>/<Button className={classes.button}>Daftar</Button>
        </Typography>
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
    </Paper>
  );
};

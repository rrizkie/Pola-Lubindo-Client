import React, { useState } from "react";
import { Paper, Typography, InputBase, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./styles";
import { useHistory } from "react-router";

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <div>
        <Paper className={classes.root}>
          <div className={classes.left}>
            <Typography className={classes.leftContent}>
              <ArrowBackIcon style={{cursor:"pointer"}} onClick={()=>history.push('/')}/>
            </Typography>
            <Typography className={classes.leftContent}>Masuk Akun</Typography>
          </div>
          <div>
            <Typography className={classes.rightContent}>Daftar</Typography>
          </div>
        </Paper>
      </div>
      <div>
        <form className={classes.formRoot}>
          <div className={classes.formBox}>
            <Typography className={classes.formText}>
              Email / Nomor Ponsel
            </Typography>
            <InputBase className={classes.form} />
          </div>
          <div className={classes.formBox}>
            <Typography className={classes.formText}>Password</Typography>
            <InputBase className={classes.form} />
          </div>
          <div className={classes.forget}>
            <Typography style={{ fontSize: "0.8rem" }}>
              Lupa Kata Sandi?
            </Typography>
          </div>
          <Button className={classes.button}>Selanjutnya</Button>
        </form>
        <div className={classes.register}>
          <Typography style={{ fontSize: "0.7rem" }}>
            Belum punya akun?{" "}
            <a style={{ color: "#ed292f", fontSize: "0.7rem", fontWeight: "bold" }}>
              Daftar
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState, useContext } from "react";
import { Paper, Typography, InputBase, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import { Context } from "../../context/globalState";

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { login } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
    login({ email, password });
    history.push("/");
  }

  return (
    <div>
      <div>
        <Paper className={classes.root}>
          <div className={classes.left}>
            <Typography className={classes.leftContent}>
              <ArrowBackIcon
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/")}
              />
            </Typography>
            <Typography className={classes.leftContent}>Masuk Akun</Typography>
          </div>
          <div>
            <Typography
              className={classes.rightContent}
              onClick={() => history.push("/register")}
            >
              Daftar
            </Typography>
          </div>
        </Paper>
      </div>
      <div>
        <form className={classes.formRoot}>
          <div className={classes.formBox}>
            <Typography className={classes.formText}>
              Email / Nomor Ponsel
            </Typography>
            <InputBase
              className={classes.form}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.formBox}>
            <Typography className={classes.formText}>Password</Typography>
            <InputBase
              className={classes.form}
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.forget}>
            <Typography style={{ fontSize: "0.8rem" }}>
              Lupa Kata Sandi?
            </Typography>
          </div>
          <Button className={classes.button} onClick={submitForm}>
            Selanjutnya
          </Button>
        </form>
        <div className={classes.register}>
          <Typography style={{ fontSize: "0.7rem" }}>
            Belum punya akun?{" "}
            <a
              style={{
                color: "#ed292f",
                fontSize: "0.7rem",
                fontWeight: "bold",
              }}
              onClick={() => history.push("/register")}
            >
              Daftar
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

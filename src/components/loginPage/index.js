import React, { useState, useContext } from "react";
import { Paper, Typography, InputBase, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import { Context } from "../../context/globalState";

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { login, refCode } = useContext(Context);
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const response =
      input.indexOf("@") > -1
        ? await login({ email: input, password })
        : await login({ phone: input, password });
    if (response.message === "success") {
      history.push(refCode ? `/?ref=${refCode}` : "/");
    }
  };

  const handleLupaPassword = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+6281806152968&text=hi",
      "_blank"
    );
  };

  return (
    <div>
      <div>
        <Paper className={classes.root}>
          <div className={classes.left}>
            <Typography className={classes.leftContent}>
              <ArrowBackIcon
                style={{ cursor: "pointer" }}
                onClick={() => history.push(refCode ? `/?ref=${refCode}` : "/")}
              />
            </Typography>
            <Typography className={classes.leftContent}>Masuk Akun</Typography>
          </div>
          <div>
            <Typography
              className={classes.rightContent}
              onClick={() =>
                history.push(refCode ? `/register?ref=${refCode}` : "/register")
              }
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
            <Typography
              style={{ fontSize: "0.8rem" }}
              onClick={handleLupaPassword}
            >
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
              onClick={() =>
                history.push(refCode ? `/register?ref=${refCode}` : "/register")
              }
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

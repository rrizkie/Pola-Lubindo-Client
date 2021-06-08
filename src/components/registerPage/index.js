import React, { useState, useContext } from "react";
import { Context } from "../../context/globalState";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { Paper, Typography, InputBase, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const RegisterPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { register,refCode } = useContext(Context);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    if (password === konfirmasiPassword) {
      const response = await register({ email, phone, nama, password });
      if (response.message === "Success") history.push(refCode ? `/login?ref=${refCode}` :"/login");
    } else {
      setEmail("");
      setPhone("");
      setNama("");
      setPassword("");
      setKonfirmasiPassword("");
    }
  };
  return (
    <div>
      <Paper className={classes.root}>
        <div className={classes.left}>
          <Typography className={classes.leftContent}>
            <ArrowBackIcon
              style={{ cursor: "pointer" }}
              onClick={() => history.push(refCode ? `/?ref=${refCode}` :"/")}
            />
          </Typography>
          <Typography className={classes.leftContent}>Daftar</Typography>
        </div>
      </Paper>
      <form className={classes.formRoot} onSubmit={submitForm}>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>Nama</Typography>
          <InputBase
            className={classes.form}
            name="Name"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>No.Hp (whatsapp)</Typography>
          <InputBase
            className={classes.form}
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>Email</Typography>
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
            type="password"
            className={classes.form}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>
            Konfirmasi Password
          </Typography>
          <InputBase
            type="password"
            className={classes.form}
            name="konfirmasi password"
            value={konfirmasiPassword}
            onChange={(e) => setKonfirmasiPassword(e.target.value)}
          />
        </div>
        <Button className={classes.button} onClick={submitForm}>
          Selanjutnya
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;

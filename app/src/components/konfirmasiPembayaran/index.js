import React from "react";
import {
  Paper,
  Typography,
  Select,
  TextField,
  InputBase,
  Button,
  Options,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import { useStyle } from "./styles";

const KonfirmasiPembayaran = () => {
  const classes = useStyle();
  const history = useHistory();
  const back = () => {
    history.push("/pembayaran");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Paper className={classes.nav}>
        <div className={classes.left}>
          <Typography className={classes.leftContent}>
            <ArrowBackIcon style={{ cursor: "pointer" }} onClick={back} />
          </Typography>
          <Typography className={classes.leftContent}>
            Konfirmasi Pembayaran
          </Typography>
        </div>
      </Paper>
      <Paper className={classes.box}>
        <div className={classes.innerBox}>
          <DateRangeIcon />
          <TextField type="date" />
        </div>
        <div className={classes.innerBox}>
          <PersonIcon />
          <InputBase
            placeholder="Nama di Rekening"
            className={classes.inputBase}
          />
        </div>
        <div className={classes.innerBox}>
          <AccountBalanceWalletIcon />
          <InputBase placeholder="Jumlah" className={classes.inputBase} />
        </div>
        <div className={classes.innerBox}>
          <AccountBalanceIcon />
          <Select label="Bank Asal" />
          <Select label="Bank Tujuan" />
        </div>
        <div className={classes.innerBox}>
          <InfoIcon />
          <InputBase placeholder="Keterangan" className={classes.inputBase} />
        </div>
      </Paper>
      <Button className={classes.btn}>Konfirmasi</Button>
    </div>
  );
};

export default KonfirmasiPembayaran;

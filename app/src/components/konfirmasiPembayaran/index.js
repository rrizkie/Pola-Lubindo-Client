import React, { useContext, useState } from "react";
import {
  Paper,
  Typography,
  Select,
  TextField,
  InputBase,
  Button,
  MenuItem,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import { useStyle } from "./styles";
import { Context } from "../../context/globalState";

const KonfirmasiPembayaran = () => {
  const classes = useStyle();
  const history = useHistory();
  const { confirmPayment } = useContext(Context);
  const [tanggal, setTanggal] = useState("");
  const [namaRek, setNamaRek] = useState("");
  const [total, setTotal] = useState(0);
  const [bankAsal, setBankAsal] = useState("Bank Asal");
  const [bankTujuan, setBankTujuan] = useState("Bank Tujuan");
  const [keterangan, setKeterangan] = useState("");
  const transaksiData = JSON.parse(localStorage.getItem("transaksi"));

  const back = () => {
    history.push("/pembayaran");
  };

  const handleConfirm = () => {
    transaksiData.statusPembayaran = "sudah transfer";
    transaksiData.metodePembayaran = "transfer";
    transaksiData.namaRekening = namaRek;
    transaksiData.jumlahBayar = total;
    transaksiData.bankAsal = bankAsal;
    transaksiData.bankTujuan = bankTujuan;

    confirmPayment(
      transaksiData,
      localStorage.getItem("transaksi id"),
      localStorage.getItem("access_token")
    );
    history.push("/");
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
          <TextField
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </div>
        <div className={classes.innerBox}>
          <PersonIcon />
          <InputBase
            value={namaRek}
            onChange={(e) => setNamaRek(e.target.value)}
            placeholder="Nama di Rekening"
            className={classes.inputBase}
          />
        </div>
        <div className={classes.innerBox}>
          <AccountBalanceWalletIcon />
          <InputBase
            placeholder="Jumlah"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className={classes.inputBase}
          />
        </div>
        <div className={classes.innerBox}>
          <AccountBalanceIcon />
          <Select
            label="Bank Asal"
            value={bankAsal}
            onChange={(e) => setBankAsal(e.target.value)}
            className={classes["select-width"]}
          >
            <MenuItem>Bank Asal</MenuItem>
            <MenuItem value="BCA">BCA</MenuItem>
            <MenuItem value="BNI">BNI</MenuItem>
          </Select>
          <Select
            label="Bank Tujuan"
            value={bankTujuan}
            onChange={(e) => setBankTujuan(e.target.value)}
            className={classes["select-width"]}
          >
            <MenuItem>Bank Tujuan</MenuItem>
            <MenuItem value="BCA">BCA</MenuItem>
            <MenuItem value="BNI">BNI</MenuItem>
          </Select>
        </div>
        <div className={classes.innerBox}>
          <InfoIcon />
          <InputBase
            placeholder="Keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            className={classes.inputBase}
          />
        </div>
      </Paper>
      <Button className={classes.btn} onClick={handleConfirm}>
        Konfirmasi
      </Button>
    </div>
  );
};

export default KonfirmasiPembayaran;

import React from "react";
import { Paper, Typography, Grid, Button } from "@material-ui/core";

import { useStyle } from "./styles";

import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

import { BottomNav } from "../bottomNav";
const Transaksi = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Daftar Transaksi
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        className={classes.optColor}
      >
        <Grid item xs={2} className={classes.optAlign}>
          <AccountBalanceWalletOutlinedIcon fontSize="large" />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="subtitle1">Transaksi Berlangsung</Typography>
        </Grid>

        <Grid item xs={2} className={classes.optAlign}>
          <AutorenewIcon fontSize="large" />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="subtitle1">Transaksi Berlangsung</Typography>
        </Grid>
      </Grid>

      <Paper className={classes.paper}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2} style={{ textAlign: "right" }}>
            <LocalMallIcon />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle2">
              <b>Belanja</b>
              <br />
              30 Des 2021
            </Typography>
          </Grid>
        </Grid>

        <hr />

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <img
              src="https://media.foxbusiness.com/BrightCove/854081161001/202005/3384/854081161001_6154929188001_6154933434001-vs.jpg"
              alt="nama_produk"
              width="50"
              height="50"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">
              <b> Judul Produk</b>
              <br />1 barang
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">
              konfirmasi sebelum <br />
              22/03/2021 23:00
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2">
              +1 barang lainnya
              <br />
              Total belanja
              <br />
              Rp. 230.000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button style={{ backgroundColor: "green", color: "white" }}>
              Konfirmasi Pembayaran
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <BottomNav />
    </div>
  );
};

export default Transaksi;

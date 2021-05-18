import React, { useContext, useEffect, useState } from "react";
import { Paper, Typography, Grid, Button } from "@material-ui/core";

import { useStyle } from "./styles";

import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { BottomNav } from "../bottomNav";
import { Context } from "../../context/globalState";
import { useHistory } from "react-router";

const Transaksi = () => {
  const classes = useStyle();
  const history = useHistory();
  const {
    fetchTransaksiBeforePayment,
    fetchTransaksiAfterPayment,
    transaksiBeforePayment,
    transaksiAfterPayment,
    refCode,
    pesananSelesai,
  } = useContext(Context);

  const [transaksiType, setTransaksiType] = useState("Menunggu Pembayaran");
  const allTransaksiType = [
    {
      value: "Menunggu Pembayaran",
      icon: <AccountBalanceWalletOutlinedIcon fontSize="large" />,
    },
    {
      value: "Transaksi Berlangsung",
      icon: <AutorenewIcon fontSize="large" />,
    },
  ];

  return (
    <>
      <div className={classes.transaksiPage}>
        <Typography variant="h5" gutterBottom>
          Daftar Transaksi
        </Typography>

        <Grid container alignItems="center">
          {allTransaksiType.map((option) => (
            <Grid
              item
              xs={6}
              key={option.value}
              onClick={() => setTransaksiType(option.value)}
              className={
                transaksiType === option.value ? classes.optColor : null
              }
            >
              {option.icon}
              {option.value}
            </Grid>
          ))}
        </Grid>

        {transaksiType === "Menunggu Pembayaran" ? (
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
                <Typography variant="body2">
                  <b> Judul Produk</b>
                  <br />1 barang
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  konfirmasi sebelum <br />
                  22/03/2021 23:00
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body2">
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
        ) : (
          <>
            <Paper className={classes.paper}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={2} style={{ textAlign: "right" }}>
                  <LocalMallIcon />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">
                    <b>Belanja</b>
                    <br />
                    30 Des 2021
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    disableElevation
                    style={{ backgroundColor: "#ffbbbe", color: "red" }}
                  >
                    Dalam Pengiriman
                  </Button>
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
                  <Typography variant="body2">
                    <b> Judul Produk</b>
                    <br />1 barang
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    konfirmasi sebelum <br />
                    22/03/2021 23:00
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2">
                    +1 barang lainnya
                    <br />
                    Total belanja
                    <br />
                    Rp. 230.000
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button style={{ backgroundColor: "green", color: "white" }}>
                    Cek Resi
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={2} style={{ textAlign: "right" }}>
                  <LocalMallIcon />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">
                    <b>Belanja</b>
                    <br />
                    30 Des 2021
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    disableElevation
                    style={{ backgroundColor: "#d6ffd9", color: "green" }}
                  >
                    Selesai
                  </Button>
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
                  <Typography variant="body2">
                    <b> Judul Produk</b>
                    <br />1 barang
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    konfirmasi sebelum <br />
                    22/03/2021 23:00
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2">
                    +1 barang lainnya
                    <br />
                    Total belanja
                    <br />
                    Rp. 230.000
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button style={{ backgroundColor: "green", color: "white" }}>
                    Beli Lagi
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </>
        )}
      </div>
      <BottomNav />
    </>
  );
};

export default Transaksi;

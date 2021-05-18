import React, { useContext, useEffect } from "react";
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
  const history = useHistory()
  const { fetchTransaksiBeforePayment, transaksiBeforePayment,refCode } = useContext(Context);
  console.log(transaksiBeforePayment, "< cart item");

  const handleKonfirmasi = (data) =>{
    let transaksiData = {

      invoice: "INV/300421/01",
      totalHarga: data.totalHarga,
      ongkosKirim: data.ongkosKirim,
      namaPenerima: data.namaPenerima,
      alamatPengiriman: data.alamatPengiriman,
      statusPembayaran: data.statusPembayaran
    }
    localStorage.setItem("transaksi",JSON.stringify(transaksiData))
    localStorage.setItem("transaksi id",data.id)
    history.push(refCode ? `/konfirmasi-pembayaran?ref=${refCode}` : `/konfirmasi-pembayaran`)
  }

  useEffect(() => {
    fetchTransaksiBeforePayment();
  }, []);
  return (
    <>
      <div className={classes.transaksiPage}>
        <Typography variant="h5" gutterBottom>
          Daftar Transaksi
        </Typography>
        <Grid container alignItems="center" className={classes.optColor}>
          <Grid item xs={2} className={classes.optAlign}>
            <AccountBalanceWalletOutlinedIcon fontSize="large" />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="subtitle1">Menunggu Pembayaran</Typography>
          </Grid>

          <Grid item xs={2} className={classes.optAlign}>
            <AutorenewIcon fontSize="large" />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="subtitle1">Transaksi Berlangsung</Typography>
          </Grid>
        </Grid>

        {transaksiBeforePayment &&
          transaksiBeforePayment.map((cart) => {
            return (
              <>
                <Paper className={classes.paper}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={2} style={{ textAlign: "right" }}>
                      <LocalMallIcon />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="subtitle2">
                        <b>Belanja</b>
                        <br />
                        {cart.createdAt.split("T")[0]}
                      </Typography>
                    </Grid>
                  </Grid>

                  <hr />
                  <Grid container spacing={3} alignItems="center">
                    {cart?.Carts.map((item) => (
                      <>
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
                            <b> {item.Produk.namaProduk}</b>
                            <br />1 barang
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2">
                            konfirmasi sebelum <br />
                            22/03/2021 23:00
                          </Typography>
                        </Grid>
                      </>
                    ))}

                    <Grid item xs={6}>
                      <Typography variant="body2">
                        {cart.Carts.length > 2 ? (
                          <>{cart.Carts.length} barang lainnya </>
                        ) : (
                          ""
                        )}
                        <br />
                        Total belanja
                        <br />
                        Rp. {cart.totalHarga}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          fontSize: "0.7rem",
                          fontWeight: "bold",
                        }}
                        onClick={()=>handleKonfirmasi(cart)}
                      >
                        Konfirmasi Pembayaran
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </>
            );
          })}
      </div>
      <BottomNav />
    </>
  );
};

export default Transaksi;

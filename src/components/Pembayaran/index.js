import React, { useContext } from "react";
import { Button, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { BottomNav } from "../bottomNav";
import bca from "../../assets/logo-bca.png";
import bni from "../../assets/logo-BNI.png";
import { useHistory } from "react-router";
import { Context } from "../../context/globalState";

const Pembayaran = () => {
  const classes = useStyles();
  const history = useHistory();
  const { totalPrice, ongkosKirim, refCode } = useContext(Context);
  return (
    <div>
      <Paper className={classes.box} elevation={3}>
        <div className={classes.content}>
          <Typography>Bank Pembayaran</Typography>
          <Typography style={{ fontSize: "0.8rem" }}>
            Pemnbayaran Hanya melalui rekening
          </Typography>
        </div>
        <div className={classes.content}>
          <img src={bca} alt="BCA" width="100px" />
          <Typography>Bank BCA, Jakarta</Typography>
          <Typography>541.5859.888</Typography>
          <Typography>PT.Pola Megafit Prima</Typography>
        </div>
        <div className={classes.content}>
          <img src={bni} alt="BNI" width="100px" />
          <Typography>Bank BNI, Jakarta</Typography>
          <Typography>258.258.1995</Typography>
          <Typography>PT.Pola Megafit Prima</Typography>
        </div>
        <div className={classes.content}>
          <Typography style={{ fontWeight: "bold" }}>Total Belanja</Typography>
          <Typography
            style={{ fontWeight: "bold", fontSize: "2rem", color: "#ff6701" }}
          >
            Rp.{totalPrice + ongkosKirim}
          </Typography>
          <Typography>Bayar Sebelum</Typography>
          <Typography>23/03/2021</Typography>
        </div>
      </Paper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem 0",
          flexDirection: "column",
        }}
      >
        <Button
          style={{
            background: "green",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
          onClick={() =>
            history.push(
              !refCode
                ? "/konfirmasi-pembayaran"
                : `/konfirmasi-pembayaran?ref=${refCode}`
            )
          }
        >
          Konfirmasi Pembayaran
        </Button>
        <Button
          onClick={() =>
            history.push(!refCode ? "/" : `/?ref=${refCode}`)
          }
          style={{
            border: "2px solid green",
            color: "green",
            fontWeight: "bold",
            margin: "1rem 0",
            borderRadius: "10px",
          }}
        >
          Kembali Ke Produk
        </Button>
      </div>
    </div>
  );
};

export default Pembayaran;

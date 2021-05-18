import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";
import useStyles from "./styles";

export default function CenteredGrid() {
  const classes = useStyles();

  const history = useHistory();
  const back = () => {
    history.push("/profile");
  };
  return (
    <>
      <Paper className={classes.nav}>
        <div className={classes.left}>
          <Typography className={classes.leftContent}>
            <ArrowBack style={{ cursor: "pointer" }} onClick={back} />
          </Typography>
          <Typography className={classes.leftContent}>
            Riwayat Transaksi
          </Typography>
        </div>
      </Paper>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              <b>Komisi</b>
              <br />
              21 Mar 2021 11:40 WIB
              <p style={{ color: "green", fontSize: "20px" }}>+ Rp. 27.000</p>
              Transaksi penjualan Irene, Inv/20232/123/2222
              <hr />
              <b>Pencairan Komisi</b>
              <br />
              20 Mar 2021 11:40 WIB
              <p style={{ color: "red", fontSize: "20px" }}>+ Rp. 27.000</p>
              BCA 1123232 - Erwin
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
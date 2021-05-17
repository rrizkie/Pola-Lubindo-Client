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
    history.push("/pembayaran");
  };
  return (
    <>
      <Paper className={classes.nav}>
        <div className={classes.left}>
          <Typography className={classes.leftContent}>
            <ArrowBack style={{ cursor: "pointer" }} onClick={back} />
          </Typography>
          <Typography className={classes.leftContent}>Profil</Typography>
        </div>
      </Paper>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                style={{ color: "#000" }}
              >
                <Grid item xs={2}>
                  <img src="/komisi.png" alt="Komisi" />
                </Grid>
                <Grid item xs={6}>
                  Total Komisi
                </Grid>
                <Grid item xs={4}>
                  Rp. 200.000,-
                </Grid>
              </Grid>

              <Button
                variant="outlined"
                fullWidth
                style={{ borderColor: "green", color: "green" }}
              >
                Lihat Riwayat Transaksi
              </Button>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ backgroundColor: "green" }}
                href="/riwayat-transaksi"
              >
                Transaksi Komisi
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            Nama
          </Grid>
          <Grid item xs={5}>
            Nama
          </Grid>
          <Grid item xs={3}>
            ubah
          </Grid>

          <Grid item xs={4}>
            Email
          </Grid>
          <Grid item xs={5}>
            Email
          </Grid>
          <Grid item xs={3}>
            ubah
          </Grid>

          <Grid item xs={4}>
            Nomor Tel.
          </Grid>
          <Grid item xs={5}>
            Nomor Tel.
          </Grid>
          <Grid item xs={3}>
            ubah
          </Grid>

          <Grid item xs={4}>
            No. Rekening
          </Grid>
          <Grid item xs={5}>
            No. Rekening
          </Grid>
          <Grid item xs={3}>
            ubah
          </Grid>

          <Grid item xs={4}>
            Alamat
          </Grid>
          <Grid item xs={5}>
            Alamat
          </Grid>
          <Grid item xs={3}>
            ubah
          </Grid>
        </Grid>
      </div>
    </>
  );
}
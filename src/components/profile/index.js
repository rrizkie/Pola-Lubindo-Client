import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";
import useStyles from "./styles";
import komisiLogo from "./asset/komisi.png";
import { useContext } from "react";
import { Context } from "../../context/globalState";

export default function CenteredGrid() {
  const classes = useStyles();
  const {
    fetchKomisiData,
    fetchUserData,
    komisi,
    userData,
    refCode,
    resetLocal,
    setRefCode,
  } = useContext(Context);

  const history = useHistory();
  const back = () => {
    history.push(refCode ? `/?ref=${refCode}` : "/");
  };
  const logout = () => {
    history.push("/login");
    localStorage.removeItem("access_token");
    localStorage.removeItem("carts");
    localStorage.removeItem("totalPrice");
    resetLocal();
    setRefCode(null);
  };

  useEffect(() => {
    fetchKomisiData();
    fetchUserData();
  }, []);
  return (
    <>
      <Paper className={classes.nav}>
        <div className={classes.left}>
          <Typography className={classes.leftContent}>
            <ArrowBack style={{ cursor: "pointer" }} onClick={back} />
          </Typography>
          <Typography className={classes.leftContent}>Profile</Typography>
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
                  <img src={komisiLogo} alt="Komisi" />
                </Grid>
                <Grid item xs={6}>
                  Total Komisi
                </Grid>
                {komisi && (
                  <Grid item xs={4}>
                    Rp. {new Number(komisi.sisaKomisi).toLocaleString("id-ID")}
                  </Grid>
                )}
              </Grid>

              <Button
                variant="outlined"
                fullWidth
                style={{ borderColor: "green", color: "green" }}
                onClick={() =>
                  history.push(
                    refCode
                      ? `/riwayat-transaksi?ref=${refCode}`
                      : `/riwayat-transaksi`
                  )
                }
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
              >
                Transaksi Komisi
              </Button>
            </Paper>
          </Grid>
          {userData && (
            <>
              {" "}
              <Grid item xs={4}>
                Nama
              </Grid>
              <Grid item xs={5}>
                {userData.nama}
              </Grid>
              <Grid item xs={3}>
                ubah
              </Grid>
              <Grid item xs={4}>
                Email
              </Grid>
              <Grid item xs={5}>
                {userData.email}
              </Grid>
              <Grid item xs={3}>
                ubah
              </Grid>
              <Grid item xs={4}>
                Nomor Tel.
              </Grid>
              <Grid item xs={5}>
                {userData.phone}
              </Grid>
              <Grid item xs={3}>
                ubah
              </Grid>
              <Grid item xs={4}>
                No. Rekening
              </Grid>
              <Grid item xs={5}>
                {userData.noRekening}
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
              <Grid item xs={4}>
                Total Transaksi
              </Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={3}>
                Rp. {userData.totalPembelian}
              </Grid>
            </>
          )}
        </Grid>
        <div className={classes.logoutBtn}>
          <Button
            fullWidth
            style={{ backgroundColor: "green", color: "#fff" }}
            onClick={logout}
          >
            Log Out
          </Button>
        </div>
      </div>
    </>
  );
}

import React, { useContext, useState, useEffect } from "react";
import {
  Paper,
  Typography,
  InputBase,
  Checkbox,
  Button,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import CartItem from "../cartItem";
import { Context } from "../../context/globalState";

const CartPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    carts,
    address,
    addAddress,
    getOngkir,
    services,
    totalPrice,
    fetchProduct,
    checkoutCart,
    ongkosKirim,
    setOngkir,
    refCode,
  } = useContext(Context);
  const [check, setCheck] = useState(true);
  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [courierPicked, setCourierPicked] = useState("");
  const [checked, setCheked] = useState(ongkosKirim);
  function back() {
    history.push("/");
    addAddress("");
  }

  const selected = (e) => {
    setCourierPicked(e.target.value);
    getOngkir({
      destination: address.kabupaten,
      courier: e.target.value,
      weight: 1000,
    });
  };

  const handleChecked = (price) => {
    setCheked(price);
    setOngkir(price);
  };

  const checkout = async () => {
    let data = {
      userData: {
        email,
        phone,
        nama,
      },
      transaksiData: {
        invoice: "INV/300421/01",
        totalHarga: totalPrice + ongkosKirim,
        ongkosKirim: ongkosKirim,
        namaPenerima: nama,
        alamatPengiriman: `${address?.jalan},${address?.kecamatan},${address?.kabupaten},
        ${address?.detail}`,
      },
      value: [],
    };
    if (localStorage.getItem("access_token")) {
      data.access_token = localStorage.getItem("access_token");
    }
    const chekedItem = carts.filter((item) => item.checked);
    chekedItem.map((item) => {
      item.product.stock -= item.qty;
      data.value.push({ produk: item.product, ProdukId: item.product.id });
    });
    localStorage.setItem("transaksi", JSON.stringify(data.transaksiData));
    const response = await checkoutCart(data);
    if (response.message === "Success")
      history.push(!refCode ? "/pembayaran" : `/pembayaran?ref=${refCode}`);
    setCourierPicked("");
    setCheked(ongkosKirim);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Paper className={classes.nav}>
        <div className={classes.left}>
          <Typography className={classes.leftContent}>
            <ArrowBackIcon style={{ cursor: "pointer" }} onClick={back} />
          </Typography>
          <Typography className={classes.leftContent}>
            Keranjang Belanja
          </Typography>
        </div>
      </Paper>
      <Paper className={classes.box1} elevation={3}>
        <Typography className={classes.boxText}>Informasi Pembeli</Typography>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>Nama Lengkap</Typography>
          <InputBase
            className={classes.form}
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
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
          <Typography className={classes.formText}>
            Nomor HP (whatsapp)
          </Typography>
          <InputBase
            className={classes.form}
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {address.kabupaten ? (
          <div>
            <Typography className={classes.formText}>
              Alamat Pengiriman
            </Typography>
            <Typography
              style={{ margin: "0.5rem 0 1rem 0.5rem" }}
              className={classes.innerBoxText}
            >
              {address.jalan},{address.kecamatan},{address.kabupaten},
              {address.detail}
            </Typography>
          </div>
        ) : (
          <>
            <Typography className={classes.formText}>
              Alamat Pengiriman
            </Typography>
            <Paper
              className={classes.innerBox}
              onClick={() =>
                history.push(
                  !refCode ? "/shipping" : `/shipping?ref=${refCode}`
                )
              }
            >
              <Typography className={classes.innerBoxText}>
                Tetapkan Alamat Pengiriman
              </Typography>
              <Typography className={classes.innerBoxText}>
                <ArrowForwardIcon />
              </Typography>
            </Paper>
          </>
        )}
      </Paper>

      <Paper className={classes.box2} elevation={3}>
        <Typography className={classes.boxText}>Pengiriman</Typography>
        <select
          className={classes.select}
          value={courierPicked}
          onChange={selected}
        >
          <option className={classes.option}>Pilih Kurir</option>
          <option className={classes.option}>tiki</option>
          <option className={classes.option}>jne</option>
        </select>
        <Grid container alignItems="center">
          {services &&
            services.map((service) => (
              <>
                <Grid item xs={9}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          checked === service.cost[0].value ? true : false
                        }
                        onChange={() => handleChecked(service.cost[0].value)}
                        key={service.service}
                      />
                    }
                    label={
                      <>
                        {service.service} | {service.cost[0].etd} Day
                      </>
                    }
                  />
                </Grid>

                <Grid item xs={3}>
                  Rp. {service.cost[0].value}
                </Grid>
              </>
            ))}
        </Grid>
      </Paper>

      <Paper className={classes.box2} elevation={3}>
        <Typography className={classes.boxText}>Ringkasan Belanja</Typography>
        <div className={classes.box}>
          <Checkbox
            inputProps={{ "aria-label": "primary checkbox" }}
            onChange={() => setCheck(!check)}
          />
          <div>
            <Typography style={{ fontSize: "0.4rem", fontWeight: "bold" }}>
              Pilih Semua Produk
            </Typography>
          </div>
        </div>
        {carts.map((cart) => (
          <CartItem
            id={cart.product.id}
            nama={cart.product.namaProduk}
            weight={cart.product.weight}
            price={cart.product.price}
            qty={cart.qty}
            key={cart.product.id}
          />
        ))}
        <div
          style={{
            borderTop: "2px solid grey",
            margin: "0.3rem",
            display: "flex",
            justifyContent: "space-between",
            padding: "0.4rem",
          }}
        >
          <Typography style={{ fontSize: "0.6rem", fontWeight: "bold" }}>
            Total Belanja
          </Typography>
          <Typography style={{ fontSize: "0.6rem", fontWeight: "bold" }}>
            Rp {new Number(totalPrice).toLocaleString("id-ID")}
          </Typography>
        </div>
      </Paper>
      <Button className={classes.btn} onClick={checkout}>
        Bayar
      </Button>
    </>
  );
};

export default CartPage;

import React, { useContext, useState, useEffect } from "react";
import {
  Paper,
  Typography,
  InputBase,
  Checkbox,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import CartItem from "../cartItem";
import { ServiceCard } from "../serviceCard";
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
  } = useContext(Context);
  const [check, setCheck] = useState(true);
  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [courierPicked, setCourierPicked] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(ongkosKirim);
  console.log(selectedRadio, "<<<< radio value");

  function back() {
    history.push("/");
    addAddress("");
  }

  function selected(e) {
    setCourierPicked(e.target.value);
    getOngkir({
      destination: address.kabupaten,
      courier: e.target.value,
      weight: 1000,
    });
  }

  const handleChangeRadio = (e) => {
    setSelectedRadio(e.target.value);
    setOngkir(e.target.value);
  };

  const checkout = () => {
    let data = {
      transaksiData: {
        invoice: "INV/300421/01",
        totalHarga: totalPrice,
        ongkosKirim: ongkosKirim,
        namaPenerima: nama,
        alamatPengiriman: `${address?.jalan},${address?.kecamatan},${address?.kabupaten},
        ${address?.detail}`,
      },
      value: [],
    };
    if (!localStorage.getItem("access_token")) {
      data.userData = {
        email,
        phone,
        nama,
      };
    } else {
      data.access_token = localStorage.getItem("access_token");
    }
    console.log(data, "<<< data checkout");
    const chekedItem = carts.filter((item) => item.checked);
    chekedItem.map((item) => {
      item.product.stock -= item.qty;
      data.value.push({ produk: item.product, ProdukId: item.product.id });
    });
    // checkoutCart(data);
    // history.push("/pembayaran");
  };

  useEffect(() => {
    fetchProduct();
  }, []);

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
              onClick={() => history.push("/shipping")}
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
        <div>
          <FormControl className="fieldset">
            <RadioGroup value={selectedRadio} onChange={handleChangeRadio}>
              {services &&
                services.map((service) => (
                  <ServiceCard
                    key={service.service}
                    service={service.service}
                    price={service.cost[0].value}
                    etd={service.cost[0].etd}
                  />
                ))}
            </RadioGroup>
          </FormControl>
        </div>
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
    </div>
  );
};

export default CartPage;

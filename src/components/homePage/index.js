import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { Navbar } from "../navbar";
import { CardProduct } from "../card";
import { BottomNav } from "../bottomNav";
import { Typography, Fab, Button, Grid } from "@material-ui/core";
import { Context } from "../../context/globalState";
import brandLogo from "../../assets/brand1.png";
import allBrand from "../../assets/allBrand.png";
import { useLocation } from "react-router-dom";
import ShareIcon from "@material-ui/icons/Share";

import PremierModal from "../premierModal";
import Swal from "sweetalert2";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const HomePage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [visible, setVisible] = useState(false);
  const query = useQuery();
  const classes = useStyles();
  const {
    fetchBrands,
    fetchProduct,
    fetchCityListAPI,
    fetchUserData,
    brands,
    products,
    setRefCode,
    getRefcode,
    userData,
  } = useContext(Context);
  const premier = 100000;

  const handleCopy = async () => {
    const refCode = await getRefcode();
    console.log(refCode);
    function copyToClipboard(textToCopy) {
      // navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        Swal.fire({
          title: "Link Copied",
          text: `http://157.230.35.207/?ref=${refCode}`,
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
        return navigator.clipboard.writeText(textToCopy);
      } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        Swal.fire({
          title: "Link Copied",
          text: `http://157.230.35.207/?ref=${refCode}`,
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
        return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand("copy") ? res() : rej();
          textArea.remove();
        });
      }
    }
    copyToClipboard(`http://157.230.35.207/?ref=${refCode}`);
  };

  useEffect(() => {
    fetchBrands();
    fetchProduct();
    fetchCityListAPI();
    fetchUserData();
    const queryParams = query.get("ref");
    if (queryParams !== null) {
      setRefCode(queryParams);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.brandBox}>
          <Fab className={classes.Fab} onClick={() => setSelectedBrand("")}>
            <img src={allBrand} alt={allBrand} />
          </Fab>
          <Typography className={classes.brandText}>Semua Produk</Typography>
        </div>
        {brands.map((el) => (
          <div className={classes.brandBox} key={el.id}>
            <Fab
              className={classes.Fab}
              onClick={() => setSelectedBrand(el.namaBrand)}
            >
              <img src={el.fotoBrand} alt={brandLogo} width="60" height="60" />
            </Fab>
            <Typography className={classes.brandText}>
              {el.namaBrand}
            </Typography>
          </div>
        ))}
      </div>
      {localStorage.getItem("access_token") ? (
        <div className={classes.share} style={{ verticalAlign: "middle" }}>
          <Typography>
            Bagi Link untuk dapat komisi <ShareIcon />
          </Typography>
          <Button onClick={handleCopy}>SALIN</Button>
        </div>
      ) : null}
      <Grid container spacing={2} style={{ marginBottom: 75 }}>
        {!selectedBrand
          ? products.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))
          : products
              .filter((prod) => prod.Brand.namaBrand === selectedBrand)
              .map((product) => (
                <CardProduct product={product} key={product.id} />
              ))}
      </Grid>
      <BottomNav />
    </>
  );
};

export default HomePage;

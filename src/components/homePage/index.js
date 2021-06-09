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

import Carousel from "../carousel";
import PremierModal from "../premierModal";

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
    brands,
    products,
    setRefCode,
    getRefcode,
    userData,
  } = useContext(Context);
  const premier = 100000;

  const handleCopy = async () => {
    const refCode = await getRefcode();
    navigator.clipboard.writeText(`localhost:3001/?ref=${refCode}`);
  };

  useEffect(() => {
    fetchBrands();
    fetchProduct();
    fetchCityListAPI();
    const queryParams = query.get("ref");
    if (queryParams !== null) {
      setRefCode(queryParams);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Carousel />
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

import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { Navbar } from "../navbar";
import { CardProduct } from "../card";
import { BottomNav } from "../bottomNav";
import { Typography, Fab, Button } from "@material-ui/core";
import { Context } from "../../context/globalState";
import brandLogo from "../../assets/brand1.png";
import allBrand from "../../assets/allBrand.png";
import { useLocation } from "react-router-dom";
import ShareIcon from "@material-ui/icons/Share";

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
    navigator.clipboard.writeText(`localhost:3001/?ref=${refCode}`);
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
    <div>
      <Navbar />
      <div className={classes.topRoot}>
        <div className={classes.root}>
          <div className={classes.brandBox}>
            <Fab className={classes.Fab} onClick={() => setSelectedBrand("")}>
              <img src={allBrand} />
            </Fab>
            <Typography className={classes.brandText}>Semua Produk</Typography>
          </div>
          {brands.map((el) => (
            <div className={classes.brandBox} key={el.id}>
              <Fab
                className={classes.Fab}
                onClick={() => setSelectedBrand(el.namaBrand)}
              >
                <img src={brandLogo} />
              </Fab>
              <Typography className={classes.brandText}>
                {el.namaBrand}
              </Typography>
            </div>
          ))}
        </div>
        {localStorage.getItem("access_token") &&
        userData?.totalPembelian > premier &&
        userData?.statusPremier === null ? (
          <div className={classes.share} style={{ verticalAlign: "middle" }}>
            <Typography style={{ fontSize: 12, fontWeight: "bold" }}>
              Dapatkan komisi tambahan
            </Typography>
            <Button
              style={{
                color: "#fff",
                border: "2px solid #fff",
                fontSize: 10,
                fontWeight: "bold",
              }}
              onClick={() => setVisible(!visible)}
            >
              upgrade premiere
            </Button>
          </div>
        ) : userData?.statusPremier === "menunggu approval" ? (
          <div className={classes.share} style={{ verticalAlign: "middle" }}>
            <Typography style={{ fontSize: 12, fontWeight: "bold" }}>
              Status: Menunggu Proses persetujuan premiere
            </Typography>
          </div>
        ) : userData?.statusPremier === "aktif" ? (
          <div className={classes.share} style={{ verticalAlign: "middle" }}>
            <Typography style={{ fontSize: 12, fontWeight: "bold" }}>
              Bagikan link untuk komisi
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ marginRight: "0.5rem", marginTop: "0.2rem" }}>
                <ShareIcon />
              </div>
              <div>
                <Button
                  style={{
                    color: "#fff",
                    border: "2px solid #fff",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                  onClick={handleCopy}
                >
                  bagikan
                </Button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <PremierModal
          visible={visible}
          handleClose={() => setVisible(!visible)}
        />
        <div className={classes.produkCard}>
          {!selectedBrand
            ? products.map((product) => (
                <CardProduct product={product} key={product.id} />
              ))
            : products
                .filter((prod) => prod.Brand.namaBrand === selectedBrand)
                .map((product) => (
                  <CardProduct product={product} key={product.id} />
                ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;

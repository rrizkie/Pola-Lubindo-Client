import React, { useContext, useEffect } from "react";
import { useStyles } from "./styles";
import { Navbar } from "../navbar";
import { CardProduct } from "../card";
import { BottomNav } from "../bottomNav";
import { Typography, Fab } from "@material-ui/core";
import { Context } from "../../context/globalState";
import brandLogo from "../../assets/brand1.png";
import allBrand from "../../assets/allBrand.png";
import { useParams, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const HomePage = () => {
  const query = useQuery();
  const classes = useStyles();
  const {
    fetchBrands,
    fetchProduct,
    fetchCityListAPI,
    brands,
    products,
    setRefCode,
  } = useContext(Context);

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
    <div>
      <Navbar />
      <div className={classes.topRoot}>
        <div className={classes.root}>
          <div className={classes.brandBox}>
            <Fab className={classes.Fab}>
              <img src={allBrand} />
            </Fab>
            <Typography className={classes.brandText}>Semua Produk</Typography>
          </div>
          {brands.map((el) => (
            <div className={classes.brandBox} key={el.id}>
              <Fab className={classes.Fab}>
                <img src={brandLogo} />
              </Fab>
              <Typography className={classes.brandText}>
                {el.namaBrand}
              </Typography>
            </div>
          ))}
        </div>
        <div className={classes.produkCard}>
          {products.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;

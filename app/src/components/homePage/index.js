import React, { useContext, useEffect } from "react";
import { useStyles } from "./styles";
import { Navbar } from "../navbar";
import { CardProduct } from "../card";
import { BottomNav } from "../bottomNav";
import { Typography, Button } from "@material-ui/core";
import { Context } from "../../context/globalState";

const HomePage = () => {
  const classes = useStyles();
  const { fetchBrands,fetchProduct, brands, products } = useContext(Context);
    console.log(products)
  useEffect(() => {
    fetchBrands();
    fetchProduct()
  },[]);

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.brandBox}>
          <Button className={classes.brand} />
          <Typography className={classes.brandText}>Semua Produk</Typography>
        </div>
        {brands.map((el) => (
          <div className={classes.brandBox} key={el.id}>
            <Button className={classes.brand} />
            <Typography className={classes.brandText}>
              {el.namaBrand}
            </Typography>
          </div>
        ))}
      </div>
      <div className={classes.produkCard}>
          {products.map((product)=>(
              <CardProduct name={product.namaProduk} brandPic={product.fotoProduk} price={product.price} key={product.id}/>
          ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;

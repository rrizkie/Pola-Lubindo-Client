import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { useStyles } from "./styles";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import HelpIcon from "@material-ui/icons/Help";
export const BottomNav = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction label="Produk" icon={<HomeIcon />} />
      <BottomNavigationAction label="Keranjang" icon={<ShoppingBasketIcon />} />
      <BottomNavigationAction label="Pesanan" icon={<ShoppingBasketIcon />} />
      <BottomNavigationAction label="Bantuan" icon={<HelpIcon />} />
    </BottomNavigation>
  );
};

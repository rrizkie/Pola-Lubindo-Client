import React, { useContext } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import HelpIcon from "@material-ui/icons/Help";
import { useHistory, useLocation } from "react-router";
import { Context } from "../../context/globalState";

export const BottomNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { carts, totalPrice } = useContext(Context);
  return (
    <div className={classes.topRoot}>
      {location.pathname !== "/pembayaran" && carts.length > 0 && (
        <div className={classes.carts}>
          <div style={{ marginTop: "0.5rem" }}>
            <Typography style={{ fontSize: "0.8rem" }}>
              Total Belanja({carts.length})
            </Typography>
            <Typography style={{ fontSize: "0.7rem", fontWeight: "bold" }}>
              Rp {new Number(totalPrice).toLocaleString("id-ID")}
            </Typography>
          </div>
          <div>
            <Button
              className={classes.btn}
              onClick={() => history.push("/cart")}
            >
              Lanjut
            </Button>
          </div>
        </div>
      )}
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction
          label="Produk"
          icon={<HomeIcon />}
          onClick={() => history.push("/")}
        />
        <BottomNavigationAction
          label="Keranjang"
          icon={<ShoppingBasketIcon />}
          onClick={() => history.push("/cart")}
        />
        <BottomNavigationAction label="Pesanan" icon={<ShoppingBasketIcon />} />
        <BottomNavigationAction label="Bantuan" icon={<HelpIcon />} />
      </BottomNavigation>
    </div>
  );
};

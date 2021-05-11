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
import LocalMallIcon from "@material-ui/icons/LocalMall";
import HelpIcon from "@material-ui/icons/Help";

import { useHistory, useLocation } from "react-router";
import { Context } from "../../context/globalState";

export const BottomNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { carts, totalPrice, refCode } = useContext(Context);

  const allBottomActions = [
    {
      value: 0,
      label: "Produk",
      icon: <HomeIcon />,
      onClick: () => history.push(refCode ? "/" : `/?ref=${refCode}`),
    },
    {
      value: 1,
      label: "Keranjang",
      icon: <ShoppingBasketIcon />,
      onClick: () => history.push(refCode ? "/cart" : `/cart?ref=${refCode}`),
    },
    {
      value: 2,
      label: "Pesanan",
      icon: <LocalMallIcon />,
      onClick: () =>
        history.push(refCode ? "/transaksi" : `/transaksi?ref=${refCode}`),
    },
    {
      value: 3,
      label: "Bantuan",
      icon: <HelpIcon />,
      onClick: null,
    },
  ];
  const [value, setValue] = React.useState(0);
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
              onClick={() =>
                history.push(refCode ? "/cart" : `/cart?ref=${refCode}`)
              }
            >
              Lanjut
            </Button>
          </div>
        </div>
      )}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
        showLabels
      >
        {allBottomActions.map((item) => (
          <BottomNavigationAction
            key={item.value}
            label={item.label}
            icon={item.icon}
            onClick={item.onClick}
            style={{
              color: item.value === value && item.onClick ? "red" : null,
            }}
          />
        ))}
      </BottomNavigation>
    </div>
  );
};

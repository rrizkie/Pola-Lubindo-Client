import React, { useState, useContext } from "react";
import { useStyles } from "./styles";
import { Context } from "../../context/globalState";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import komisiLogo from "../../assets/komisi.png";

import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

export const CardProduct = ({ product }) => {
  const classes = useStyles();
  const { addTocart, carts, editTotalprice } = useContext(Context);
  const [count, setCount] = useState(0);

  function addCart(product) {
    const filtered = carts.filter((cart) => cart.product.id === product.id);
    editTotalprice({ status: "increment", price: +product.hargaSatuan });
    if (filtered.length > 0) {
      filtered[0].qty += 1;
    } else {
      addTocart({ product, qty: 1, checked: true });
    }
  }

  return (
    <Grid item xs={5} style={{ margin: "0.2rem" }}>
      <Card style={{ height: "auto" }}>
        <CardMedia
          className={classes.media}
          image={product.fotoProduk}
          title={product.namaProduk}
        >
          <img
            src={komisiLogo}
            alt="logo komisi"
            width="50"
            height="50"
            style={{ position: "absolute", top: 0, right: 0 }}
          />
          <Typography
            variant="subtitle2"
            style={{
              position: "absolute",
              top: 16,
              right: 17,
            }}
          >
            {product.komisi}
          </Typography>
        </CardMedia>

        <CardContent>
          <Typography className={classes.produkTitle} component="h6">
            {product.namaProduk}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rp. {product.hargaSatuan.toLocaleString("id-ID")},-
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {product.stock === 0 ? (
            <Typography variant="body2" color="textSecondary" component="p">
              Stock habis
            </Typography>
          ) : (
            <Button
              fullWidth
              className={classes.beli}
              onClick={() => addCart(product)}
            >
              Beli
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

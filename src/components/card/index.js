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
} from "@material-ui/core";
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
    <Card className={classes.root} m={6}>
      <CardMedia
        className={classes.media}
        image="https://media.foxbusiness.com/BrightCove/854081161001/202005/3384/854081161001_6154929188001_6154933434001-vs.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography className={classes.produkTitle} component="h6">
          {product.namaProduk}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Rp {new Number(product.hargaSatuan).toLocaleString("id-ID")}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <Button className={classes.beli} onClick={() => addCart(product)}>
          Beli
        </Button>
      </CardActions>
    </Card>
  );
};

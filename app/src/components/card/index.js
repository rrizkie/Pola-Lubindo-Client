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
  const { addTocart, carts } = useContext(Context);
  const [count, setCount] = useState(0);

  function addCart(product) {
    const filtered = carts.filter((cart)=> cart.product.id === product.id)
    if (filtered.length > 0){
      filtered[0].qty+= 1
    }else{
      addTocart({product,qty:1});
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
          Rp {new Number(product.price).toLocaleString("id-ID")}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button className={classes.beli} onClick={() => addCart(product)}>
          Beli
        </Button>
      </CardActions>
      {/* <CardActions>
        <Button onClick={() => setCount(count - 1)}>
          <RemoveCircleIcon />
        </Button>
        <Typography>{count}</Typography>
        <Button onClick={() => setCount(count + 1)}>
          <AddCircleSharpIcon />
        </Button>
      </CardActions> */}
    </Card>
  );
};

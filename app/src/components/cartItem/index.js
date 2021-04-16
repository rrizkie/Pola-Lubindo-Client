import React, { useContext, useState } from "react";
import { Checkbox, Typography, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Context } from "../../context/globalState";

const CartItem = ({ nama, weight, price, qty, id }) => {
  const classes = useStyles();
  const { carts, editCart, deleteCart } = useContext(Context);
  const [check, setCheck] = useState(true);
  const filtered = carts.filter((cart) => cart.product.id === id);

  function addOne() {
    filtered[0].qty += 1;
    editCart(filtered[0])
  }

  function minusOne() {
    filtered[0].qty -= 1;
    if (filtered[0].qty === 0){
      deleteCart(filtered[0].product.id)
    }else{
      editCart(filtered[0])
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Checkbox
          onChange={() => setCheck(!check)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <div>
          <Typography style={{ fontSize: "0.4rem" }}>{nama}</Typography>
          <Typography style={{ fontSize: "0.2rem" }}>{weight}Gr</Typography>
          <Typography style={{ fontSize: "0.4rem", fontWeight: "bold" }}>
            Rp {new Number(price).toLocaleString("id-ID")}
          </Typography>
        </div>
      </div>
      <div className={classes.counter}>
        <Button className={classes.btn} onClick={minusOne}>
          <RemoveCircleIcon />
        </Button>
        <Typography style={{ fontSize: "0.5rem", fontWeight: "bold" }}>
          {qty}
        </Typography>
        <Button className={classes.btn} onClick={addOne}>
          <AddCircleSharpIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;

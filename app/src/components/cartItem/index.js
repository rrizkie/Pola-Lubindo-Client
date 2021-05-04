import React, { useContext, useEffect } from "react";
import { Checkbox, Typography, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Context } from "../../context/globalState";

const CartItem = ({ nama, weight, price, qty, id }) => {
  const classes = useStyles();
  const {
    carts,
    editCart,
    deleteCart,
    checkedItem,
    products,
    editTotalprice,
  } = useContext(Context);
  const filtered = carts.filter((cart) => cart.product.id === id);
  const filterQty = products.filter((product) => product.id === id);
  const addOne = () => {
    filtered[0].qty += 1;
    editCart(filtered[0]);
    editTotalprice({ status: "increment", price: price });
  };

  const minusOne = () => {
    filtered[0].qty -= 1;
    if (filtered[0].qty === 0) {
      deleteCart(filtered[0].product.id);
      editTotalprice({ status: "decrement", price: price });
    } else {
      editCart(filtered[0]);
      editTotalprice({ status: "decrement", price: price });
    }
  };

  const handleCheck = () => {
    filtered[0].checked = !filtered[0].checked;
    checkedItem(filtered[0]);
    if (!filtered[0].checked) {
      editTotalprice({ status: "decrement", price: price * qty });
    } else {
      editTotalprice({ status: "increment", price: price * qty });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Checkbox
          checked={filtered[0].checked}
          onChange={handleCheck}
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
      {filterQty[0]?.stock === qty ? (
        filterQty[0].checked ? (
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
        ) : (
          <div className={classes.counter}>
            <Button className={classes.btn} onClick={minusOne}>
              <RemoveCircleIcon />
            </Button>
            <Typography style={{ fontSize: "0.5rem", fontWeight: "bold" }}>
              {qty}
            </Typography>
            <Button className={classes.btn} onClick={addOne} disabled>
              <AddCircleSharpIcon />
            </Button>
          </div>
        )
      ) : (
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
      )}
    </div>
  );
};

export default CartItem;

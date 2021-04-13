import React, { createContext, useReducer } from "react";
import appReducers from "./appReducers";

const initialState = {
  brands: [],
  products: [],
};
export const Context = createContext(initialState);
export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducers, initialState);
  console.log(state, "global state");

  // actions
  const fetchBrands = () => {
    fetch(`http://localhost:3000/brand`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_BRAND", payload: data });
      });
  };

  const fetchProduct = () => {
    fetch(`http://localhost:3000/produk`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_PRODUCT", payload: data });
      });
  };

  return (
    <Context.Provider
      value={{
        brands: state.brands,
        products: state.products,
        fetchBrands,
        fetchProduct,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

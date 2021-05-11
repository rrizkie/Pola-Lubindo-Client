import React, { createContext, useEffect, useReducer } from "react";
import appReducers from "./appReducers";

const initialState = {
  isLogin: false,
  refCode: "",
  cityLists: [],
  brands: [],
  products: [],
  address: {},
  services: [],
  courier: "",
  ongkosKirim: 0,
  totalPrice: localStorage.getItem("totalPrice")
    ? JSON.parse(localStorage.getItem("totalPrice"))
    : 0,
  carts: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
};
export const Context = createContext(initialState);

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducers, initialState);
  console.log(state, "global state");

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state.carts));
    localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
  }, [state]);

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

  const fetchCityListAPI = () => {
    fetch(`http://localhost:3000/city`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_CITY", payload: data });
      });
  };

  const setRefCode = (refcode) => {
    dispatch({ type: "SET_REFCODE", payload: refcode });
  };

  const addTocart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const changeCourier = (courier) => {
    dispatch({ type: "CHANGE_COURIER", payload: courier });
  };

  const editCart = (product) => {
    dispatch({ type: "EDIT_CART", payload: product });
  };

  const deleteCart = (id) => {
    dispatch({ type: "DELETE_CART", payload: id });
  };

  const addAddress = (address) => {
    dispatch({ type: "SET_ADDRESS", payload: address });
  };

  const getOngkir = (data) => {
    fetch(
      `http://localhost:3000/cost/${data.destination}/${data.courier}/${data.weight}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SERVICES", payload: data });
      });
  };

  const editTotalprice = (data) => {
    dispatch({ type: "PRICE", payload: data });
  };

  const setOngkir = (price) => {
    dispatch({ type: "SET_ONGKIR", payload: price });
  };

  const checkedItem = (data) => {
    dispatch({ type: "CHECKED_ITEM", payload: data });
  };

  const checkoutCart = (data) => {
    fetch(`http://localhost:3000/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("transaksi id", data.transaksiId);
        localStorage.removeItem("carts");
        localStorage.removeItem("totalPrice");
      });
  };

  const confirmPayment = (data, transaksiId, access_token) => {
    fetch(`http://localhost:3000/cart/${transaksiId}`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.removeItem("transaksi id");
        localStorage.removeItem("transaksi");
      });
  };

  const login = (data) => {
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        dispatch({ type: "LOGIN", payload: true });
      });
  };

  const register = (data) => {
    fetch(`http://localhost:3000/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <Context.Provider
      value={{
        refCode: state.refCode,
        brands: state.brands,
        products: state.products,
        cityLists: state.cityLists,
        carts: state.carts,
        isLogin: state.isLogin,
        address: state.address,
        totalPrice: state.totalPrice,
        services: state.services,
        ongkosKirim: state.ongkosKirim,
        fetchBrands,
        fetchProduct,
        fetchCityListAPI,
        setRefCode,
        addTocart,
        editTotalprice,
        checkedItem,
        setOngkir,
        editCart,
        checkoutCart,
        confirmPayment,
        changeCourier,
        deleteCart,
        addAddress,
        getOngkir,
        login,
        register,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

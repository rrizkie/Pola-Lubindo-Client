import React, { createContext, useEffect, useReducer } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import appReducers from "./appReducers";

const initialState = {
  isLogin: false,
  refCode: null,
  cityLists: [],
  brands: [],
  transaksiBeforePayment: [],
  transaksiAfterPayment: [],
  products: [],
  komisi: null,
  transaksiKomisi: null,
  userData: null,
  address: {},
  services: null,
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

  const resetLocal = () => {
    dispatch({ type: "RESET" });
  };

  const checkoutCart = async (itemData) => {
    try {
      let data = await fetch(`http://localhost:3000/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });
      data = await data.json();
      if (data.errMessage) {
        throw data;
      } else {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("transaksi id", data.transaksiId);
        localStorage.removeItem("carts");
        localStorage.removeItem("totalPrice");
        // dispatch({ type: "RESET" });
        return { message: "Success" };
      }
    } catch (error) {
      Swal.fire({
        title: `${error.errMessage}`,
        icon: "error",
      });
      return { message: "Failed" };
      console.log(error);
    }
  };

  const confirmPayment = async (data, transaksiId, access_token, refferal) => {
    try {
      let url = refferal
        ? `http://localhost:3000/cart/${transaksiId}?ref=${refferal}`
        : `http://localhost:3000/cart/${transaksiId}`;
      let responseData = await fetch(url, {
        method: "POST",
        headers: { access_token, "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      responseData = await responseData.json();
      if (responseData.errMessage) {
        throw responseData;
      } else {
        localStorage.removeItem("transaksi id");
        localStorage.removeItem("transaksi");
        dispatch({ type: "RESET", payload: null });
        return { message: "Success" };
      }
    } catch (error) {
      console.log(error);
      return { message: "Failed" };
    }
  };

  const login = async (inputData) => {
    try {
      let data = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });
      data = await data.json();
      console.log(data);
      if (!data.access_token) {
        throw data;
      } else {
        localStorage.setItem("access_token", data.access_token);
        dispatch({ type: "LOGIN", payload: true });
        return { message: "success" };
      }
    } catch (error) {
      Swal.fire({
        title: `${error.message}`,
        icon: "error",
      });
      return { message: "Failed" };
    }
  };

  const register = async (inputData) => {
    try {
      let data = await fetch(`http://localhost:3000/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });
      data = await data.json();
      if (data.errMessage) {
        throw data;
      } else {
        return { message: "Success" };
      }
    } catch (error) {
      Swal.fire({
        title: `${error.errMessage}`,
        icon: "error",
      });
      return { message: "Failed" };
    }
  };

  const getRefcode = async () => {
    let data = await fetch(
      `http://localhost:3000/refcode/${localStorage.getItem("access_token")}`
    );
    data = await data.json();
    return data;
  };

  const fetchTransaksiBeforePayment = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/transaksiBeforePayment`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_TRANSAKSI_BEFORE_PAYMENT", payload: data });
  };

  const fetchTransaksiAfterPayment = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/transaksiAfterPayment`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_TRANSAKSI_AFTER_PAYMENT", payload: data });
  };

  const fetchKomisiData = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/komisi`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_KOMISI", payload: data });
  };

  const fetchUserData = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/customerData`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FECTH_USER_DATA", payload: data });
  };

  const fetchTransaksiKomisi = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/transaksiKomisi`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_TRANSAKSI_KOMISI", payload: data });
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
        transaksiBeforePayment: state.transaksiBeforePayment,
        transaksiAfterPayment: state.transaksiAfterPayment,
        komisi: state.komisi,
        userData: state.userData,
        transaksiKomisi: state.transaksiKomisi,
        fetchBrands,
        fetchProduct,
        fetchCityListAPI,
        fetchTransaksiBeforePayment,
        fetchTransaksiAfterPayment,
        fetchKomisiData,
        fetchTransaksiKomisi,
        fetchUserData,
        setRefCode,
        addTocart,
        editTotalprice,
        checkedItem,
        setOngkir,
        editCart,
        checkoutCart,
        confirmPayment,
        getRefcode,
        changeCourier,
        deleteCart,
        addAddress,
        getOngkir,
        login,
        register,
        resetLocal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

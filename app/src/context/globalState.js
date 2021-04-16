import React, { createContext, useEffect, useReducer } from "react";
import appReducers from "./appReducers";

const initialState = {
  isLogin: false,
  brands: [],
  products: [],
  address:{},
  services:[],
  courier:"",
  totalPrice:0,
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

  const addTocart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const changeCourier = (courier) =>{
    dispatch({type:"CHANGE_COURIER",payload:courier})
  }

  const editCart = (product) =>{
    dispatch({type: "EDIT_CART",payload:product})
  }

  const deleteCart = (id) =>{
    dispatch({type:"DELETE_CART",payload:id})
  }

  const addAddress = (address) =>{
    dispatch({type:"SET_ADDRESS", payload:address})
  }

  const getOngkir = (data) =>{
    fetch(`http://localhost:3000/cost/${data.destination}/${data.courier}/${data.weight}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,'<<<<<<')
      dispatch({type:"SERVICES",payload:data})
    })
  }

  const login = (data) => {
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        brands: state.brands,
        products: state.products,
        carts:state.carts,
        isLogin: state.isLogin,
        address:state.address,
        totalPrice:state.totalPrice,
        services:state.services,
        fetchBrands,
        fetchProduct,
        addTocart,
        editCart,
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

export default (state, action) => {
  switch (action.type) {
    case "FETCH_BRAND":
      return {
        ...state,
        brands: action.payload,
      };
    case "FETCH_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };

    case "FETCH_CITY":
      return {
        ...state,
        cityLists: action.payload,
      };
    case "FETCH_CART":
      return {
        ...state,
        cartItem: action.payload,
      };
    case "SET_REFCODE":
      return {
        ...state,
        refCode: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case "PRICE":
      if (action.payload.status === "increment") {
        return {
          ...state,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        return {
          ...state,
          totalPrice: state.totalPrice - action.payload.price,
        };
      }
    case "CHECKED_ITEM":
      const newCarts = state.carts.filter(
        (cart) => cart.product.id !== action.payload.product.id
      );
      return {
        ...state,
        carts: [action.payload, ...newCarts],
      };
    case "CHANGE_COURIER":
      return {
        ...state,
        courier: action.payload,
      };
    case "SET_ONGKIR":
      console.log(action.payload, "payload");
      return {
        ...state,
        ongkosKirim: action.payload,
      };
    case "EDIT_CART":
      const filtered = state.carts.filter(
        (cart) => cart.product.id !== action.payload.product.id
      );
      return {
        ...state,
        carts: [action.payload, ...filtered],
      };
    case "DELETE_CART":
      const filteredCarts = state.carts.filter(
        (cart) => cart.product.id !== action.payload
      );
      return {
        ...state,
        carts: [...filteredCarts],
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "SERVICES":
      return {
        ...state,
        services: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };
    case "RESET_CARTS&PRICE":
      return {
        ...state,
        carts: [],
        totalPrice: 0,
        address: {},
        courier: "",
        ongkosKirim: 0,
      };
    default:
      return state;
  }
};

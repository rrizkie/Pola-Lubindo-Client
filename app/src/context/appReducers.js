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
    case "ADD_TO_CART":
        return{
            ...state,
            carts:[...state.carts,action.payload]
        }
    case "CHANGE_COURIER":
        return {
            ...state,
            courier:action.payload
        }
    case "EDIT_CART":
        const filtered = state.carts.filter((cart)=> cart.product.id !== action.payload.product.id)
        return {
            ...state,
            carts:[action.payload, ...filtered]
        }
    case "DELETE_CART":
        const filteredCarts = state.carts.filter((cart)=> cart.product.id !== action.payload)
        return {
            ...state,
            carts:[...filteredCarts]
        }
    case "SET_ADDRESS":
        return{
            ...state,
            address:action.payload
        }
    case "SERVICES":
        return {
            ...state,
            services:action.payload
        }
    case "LOGIN":
        return {
            ...state,
            isLogin:action.payload
        }
    default:
      return state;
  }
};

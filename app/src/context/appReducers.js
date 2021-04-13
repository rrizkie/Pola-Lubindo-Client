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
    default:
      return state;
  }
};

import { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer, shoppingCartReducer } from "./reducer";

const ShoppingCart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    products: [],
  });

  const [filterState, FilterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: "",
  });

  const fetchProducts = async () => {
    const res = await fetch("/products.json");
    const data = await res.json();
    if (data && DataTransfer.products) {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data.payload,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShoppingCart.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCart.Provider>
  );
};

export const ShoppingState = () => {
  return useContext(ShoppingCart);
};

export default Context;

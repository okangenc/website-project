import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shoppingCartRedux";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

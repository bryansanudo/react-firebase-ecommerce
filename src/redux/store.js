import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/slice/authSlice";
import productReducer from "@/redux/slice/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; //coming from counterSlice
import { postApi } from "./slices/postApi";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);

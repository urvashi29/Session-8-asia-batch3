import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    inc: (state, action) => {
        console.log(action);
      console.log(state.value);
      state.value += action.payload;
    },
    dec: (state, action) => {
        console.log(action)
      state.value -= action.payload;
    },
  },
});

console.log(counterSlice);

export const { inc, dec } = counterSlice.actions; //

export default counterSlice.reducer; //for store

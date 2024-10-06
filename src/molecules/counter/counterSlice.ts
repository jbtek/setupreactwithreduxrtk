import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "./counter.interface";
const initialState: CounterState = {
  value: 0,
};
/*createSlice:  A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically 
generates action creators and action types that correspond to the reducers and state.*/

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value = state.value > 0 ? state.value - 1 : 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

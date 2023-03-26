import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
  name: "myValue",
  initialState: { myVal: 0 },
  reducers: {
    increment(state, action) {
      return { myVal: state.myVal + 1 };
    },
    decrement(state, action) {
      return { myVal: state.myVal - 1 };
    },
  },
});

export const { increment, decrement } = valueSlice.actions;
export default valueSlice.reducer;

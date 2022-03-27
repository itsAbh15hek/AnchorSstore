import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    details: {},
  },
  reducers: {
    addShipping: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { addShipping } = shippingSlice.actions;
export default shippingSlice.reducer;
